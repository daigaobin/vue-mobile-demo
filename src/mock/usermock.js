import {user} from "@/api";

const Mock = require("mockjs");

Mock.mock(user.getUserInfo, "get", {
    "code": 0,
    "data": {
        "fullName": "@CNAME", // 随机生成中文人名
        "userId": 1000234234001,
        "username": "zhangsan"
    },
    "msg": "success"
});