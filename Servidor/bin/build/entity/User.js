"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var InvalidParameterException_1=require("../provider/exceptions/InvalidParameterException"),User=function(){function e(e,t,r,n){if(null==e||null==e)throw new InvalidParameterException_1.InvalidParameterException("Parametro user é 'null'");if(this.name=e,null==t||null==r)throw new InvalidParameterException_1.InvalidParameterException("Parametro email é 'null'");if(this.email=t,null==r||null==r)throw new InvalidParameterException_1.InvalidParameterException("Parametro password é 'null'");if(this.password=r,null==n||null==n)throw new InvalidParameterException_1.InvalidParameterException("Parametro token é 'null'");this.token=n}return e.prototype.getName=function(){return this.name},e.prototype.getEmail=function(){return this.email},e.prototype.getPassword=function(){return this.password},e.prototype.getToken=function(){return this.token},e}();exports.User=User;