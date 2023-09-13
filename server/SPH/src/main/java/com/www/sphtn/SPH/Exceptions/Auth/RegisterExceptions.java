package com.www.sphtn.SPH.Exceptions.Auth;

public class RegisterExceptions {
    public static class EmailUsedException extends RuntimeException {
        public EmailUsedException() {
            super();
        }
    }
    public static class UserNameUsedException extends RuntimeException {
        public UserNameUsedException() {
            super();
        }
    }
    public static class PhoneUsedException extends RuntimeException {
        public PhoneUsedException() {
            super();
        }
    }
}
