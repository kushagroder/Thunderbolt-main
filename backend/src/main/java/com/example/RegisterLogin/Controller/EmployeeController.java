package com.example.RegisterLogin.Controller;

import com.example.RegisterLogin.Dto.EmployeeDTO;
import com.example.RegisterLogin.Dto.LoginDTO;
import com.example.RegisterLogin.Service.EmployeeService;
import com.example.RegisterLogin.response.LoginResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

@RestController
@CrossOrigin
@RequestMapping("api/v1/employee")
public class EmployeeController {
    @Autowired
    private EmployeeService employeeService;
    @PostMapping(path = "/save")
    public String saveEmployee(@RequestBody EmployeeDTO employeeDTO)
    {
        String id = employeeService.addEmployee(employeeDTO);
        return id;
    }
    @PostMapping(path = "/login")
    public ResponseEntity<?> loginEmployee(@RequestBody LoginDTO loginDTO)
    {
        LoginResponse loginResponse = employeeService.loginEmployee(loginDTO);
        return ResponseEntity.ok(loginResponse);
    }
    @GetMapping("/images")
    public String getMessage() {
        String url_images = "https://e05lpgn9h3.execute-api.eu-west-2.amazonaws.com/default/Test-POC-ECR";
        // Create a RestTemplate instance
        RestTemplate restTemplate = new RestTemplate();

        try {
            String jsonResponse = restTemplate.getForObject(url_images, String.class);
            return jsonResponse;
        } catch (Exception e) {
            e.printStackTrace();
            return "Error fetching JSON response";
        }
    }


//    @GetMapping("/images")
//    public String getMessage() {
//        String url_images = "https://e05lpgn9h3.execute-api.eu-west-2.amazonaws.com/default/Test-POC-ECR";
//        // Create a RestTemplate instance
//        RestTemplate restTemplate = new RestTemplate();
//
//        try {
//            String jsonResponse = restTemplate.getForObject(url_images, String.class);
//            return jsonResponse;
//        } catch (Exception e) {
//            e.printStackTrace();
//            return "Error fetching JSON response";
//        }
//    }


//    @GetMapping("/images")
//    public String getMessage() {
//        String url_images = "https://e05lpgn9h3.execute-api.eu-west-2.amazonaws.com/default/Test-POC-ECR";
//        // Create a RestTemplate instance
//        RestTemplate restTemplate = new RestTemplate();
//
//        try {
//            String jsonResponse = restTemplate.getForObject(url_images, String.class);
//            return jsonResponse;
//        } catch (Exception e) {
//            e.printStackTrace();
//            return "Error fetching JSON response";
//        }
//    }

}
