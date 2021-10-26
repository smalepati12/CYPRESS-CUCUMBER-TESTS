let Env;
let EnvType = 'dev';
const devEnv = {
    "domain": "http://18.184.118.204:8080/",
    "analyticsPath": "analytics",
    "username":"07429978991",
    "password":"AUTOtest@2021"
}

switch (EnvType) {
    case 'dev':
        Env = devEnv;
        break;
}

export { Env };

