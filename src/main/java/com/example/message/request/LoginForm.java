package com.example.message.request;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class LoginForm {
    @NotBlank(message = "Username should not be blank!")
    @Size(min=3, max = 60, message = "Username length should be between 3 and 40")
    private String username;

    @NotBlank(message = "Password should not be blank!")
    @Size(min = 6, max = 40, message = "Password length should be between 6 and 40")
    private String password;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}