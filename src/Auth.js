const Auth = {
    isAuthenticatedFlag: false,
    authenticate() {
      this.isAuthenticatedFlag = true;
    },
    signout() {
      this.isAuthenticatedFlag = false;
    },
    getAuth() {
        return this.isAuthenticatedFlag;
      }
  };

  export default Auth;