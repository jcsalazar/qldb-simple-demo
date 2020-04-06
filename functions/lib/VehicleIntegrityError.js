class VehicleIntegrityError extends Error {
    constructor(status, message, description) {
      super(message);
      this.status = status;
      this.description = description;
    }
  
    getHttpResponse() {
      const responseBody = {
          status: this.status,
          title: this.message,
          detail: this.description,
      };
  
      return {
        statusCode: this.status,
        body: JSON.stringify(responseBody),
      };
    }
  }
  
  module.exports = VehicleIntegrityError;