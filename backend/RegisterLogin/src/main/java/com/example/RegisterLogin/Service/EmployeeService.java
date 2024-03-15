package com.example.RegisterLogin.Service;

import com.example.RegisterLogin.Dto.EmployeeDTO;
import com.example.RegisterLogin.Dto.LoginDTO;
import com.example.RegisterLogin.response.LoginResponse;
import org.springframework.stereotype.Service;

@Service
public interface EmployeeService {

    String addEmployee(EmployeeDTO employeeDTO);

    LoginResponse loginEmployee(LoginDTO loginDTO);
}