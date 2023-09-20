"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvConfiguration = void 0;
const EnvConfiguration = () => ({
    environment: process.env.NODE_ENV || 'dev',
    mongodb: process.env.MONGODB,
    port: process.env.port || 3002,
});
exports.EnvConfiguration = EnvConfiguration;
//# sourceMappingURL=env.config.js.map