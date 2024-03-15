package com.example.RegisterLogin.response;

public class LoginResponse {
    String message;
    Boolean Status;

    public LoginResponse(String message, Boolean status) {
        this.message = message;
        Status = status;
    }

    public LoginResponse() {
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Boolean getStatus() {
        return Status;
    }

    public void setStatus(Boolean status) {
        Status = status;
    }

    @Override
    public String toString() {
        return "LoginResponse{" +
                "message='" + message + '\'' +
                ", Status=" + Status +
                '}';
    }
}
