﻿using COMMON_ENTITIES;
using Dapper;
using Microsoft.Extensions.Options;
using STUDENT_ENTITY;
using STUDENT_INTERFACE;
using System;
using System.Data;
using System.Data.SqlClient;
using System.Linq;

namespace STUDENT_REPOSITOTY
{
    public class StudentRepository : IStudent
    {
        IOptions<ReadConfig> _connectionString;

        public StudentRepository(IOptions<ReadConfig> connectionString)
        {
            _connectionString = connectionString;
        }
        public JsonResponse AddStudent(ATTStudent aTTStudent)
        {
            JsonResponse jsonResponse = new JsonResponse();
            using (SqlConnection connection = new SqlConnection(_connectionString.Value.DefaultConnection))
            {
                try
                {
                    connection.Open();
                    using (SqlTransaction transaction = connection.BeginTransaction())
                    {
                        DynamicParameters parameters = new DynamicParameters();
                        parameters.Add("@Id", aTTStudent.Id);
                        parameters.Add("@StudentName", aTTStudent.StudentName);
                        parameters.Add("@StudentAge", aTTStudent.StudentAge);
                        parameters.Add("@StudentRoll", aTTStudent.StudentRoll);
                        parameters.Add("@StudentClass", aTTStudent.StudentClass);
                        jsonResponse = connection.Query<JsonResponse>(sql: "AddStudent", param: parameters, transaction: transaction,
                            commandType: CommandType.StoredProcedure).FirstOrDefault();
                        if (jsonResponse.IsSuccess)
                            transaction.Commit();
                        else
                            transaction.Rollback();
                    }

                }
                catch (Exception ex)
                {
                    jsonResponse.Message = ex.Message;
                }
            }
            return jsonResponse;
        }
    }
}
