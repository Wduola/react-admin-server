define({ "api": [
  {
    "type": "delete",
    "url": "/admin/edu/chapter/batchRemove",
    "title": "批量删除多个章节",
    "description": "<p>批量删除多个章节</p>",
    "name": "batchRemove",
    "group": "chapter-admin-controller:_章节管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>权限令牌</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "idList",
            "description": "<p>章节id列表</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 20000,\n    \"success\" : true,\n    \"data\" : {\n    },\n    \"message\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://47.103.203.152/admin/edu/chapter/batchRemove"
      }
    ],
    "version": "1.0.0",
    "filename": "routers/edu/chapter.js",
    "groupTitle": "chapter-admin-controller:_章节管理"
  },
  {
    "type": "get",
    "url": "/admin/edu/chapter/:page/:limit",
    "title": "获取章节分页列表",
    "description": "<p>获取章节分页列表</p>",
    "name": "get",
    "group": "chapter-admin-controller:_章节管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>权限令牌</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>当前页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>每页数量</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "courseId",
            "description": "<p>课程id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>章节数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 20000,\n    \"success\" : true,\n    \"data\" : {\n    },\n    \"message\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://47.103.203.152/admin/edu/chapter/:page/:limit"
      }
    ],
    "version": "1.0.0",
    "filename": "routers/edu/chapter.js",
    "groupTitle": "chapter-admin-controller:_章节管理"
  },
  {
    "type": "delete",
    "url": "/admin/edu/chapter/remove/:chapterId",
    "title": "删除章节",
    "description": "<p>删除章节</p>",
    "name": "remove",
    "group": "chapter-admin-controller:_章节管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>权限令牌</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "chapterId",
            "description": "<p>章节id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 20000,\n    \"success\" : true,\n    \"data\" : {\n    },\n    \"message\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://47.103.203.152/admin/edu/chapter/remove/:chapterId"
      }
    ],
    "version": "1.0.0",
    "filename": "routers/edu/chapter.js",
    "groupTitle": "chapter-admin-controller:_章节管理"
  },
  {
    "type": "post",
    "url": "/admin/edu/chapter/save",
    "title": "新增章节",
    "description": "<p>新增章节</p>",
    "name": "save",
    "group": "chapter-admin-controller:_章节管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>权限令牌</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "courseId",
            "description": "<p>课程id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>章节名称</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>章节数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 20000,\n    \"success\" : true,\n    \"data\" : {\n    },\n    \"message\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://47.103.203.152/admin/edu/chapter/save"
      }
    ],
    "version": "1.0.0",
    "filename": "routers/edu/chapter.js",
    "groupTitle": "chapter-admin-controller:_章节管理"
  },
  {
    "type": "put",
    "url": "/admin/edu/chapter/update",
    "title": "更新章节",
    "description": "<p>更新章节</p>",
    "name": "update",
    "group": "chapter-admin-controller:_章节管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>权限令牌</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "chapterId",
            "description": "<p>章节id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>章节标题</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 20000,\n    \"success\" : true,\n    \"data\" : {\n    },\n    \"message\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://47.103.203.152/admin/edu/chapter/update"
      }
    ],
    "version": "1.0.0",
    "filename": "routers/edu/chapter.js",
    "groupTitle": "chapter-admin-controller:_章节管理"
  },
  {
    "type": "get",
    "url": "/admin/edu/course/:page/:limit",
    "title": "获取课程分页列表",
    "description": "<p>获取课程分页列表</p>",
    "name": "get",
    "group": "course-admin-controller:_课程管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>权限令牌</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "page",
            "description": "<p>当前页码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "limit",
            "description": "<p>每页数量</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "teacherId",
            "description": "<p>可选，讲师id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subjectId",
            "description": "<p>可选，课程分类id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subjectParentId",
            "description": "<p>可选，父级课程分类id(0代表一级分类)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>可选，课程名称(模糊匹配)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>课程数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 20000,\n    \"success\" : true,\n    \"data\" : {\n    },\n    \"message\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://47.103.203.152/admin/edu/course/:page/:limit"
      }
    ],
    "version": "1.0.0",
    "filename": "routers/edu/course.js",
    "groupTitle": "course-admin-controller:_课程管理"
  },
  {
    "type": "get",
    "url": "/admin/edu/course",
    "title": "获取所有课程列表",
    "description": "<p>获取所有课程列表</p>",
    "name": "getall",
    "group": "course-admin-controller:_课程管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>权限令牌</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>课程数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 20000,\n    \"success\" : true,\n    \"data\" : {\n    },\n    \"message\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://47.103.203.152/admin/edu/course"
      }
    ],
    "version": "1.0.0",
    "filename": "routers/edu/course.js",
    "groupTitle": "course-admin-controller:_课程管理"
  },
  {
    "type": "put",
    "url": "/admin/edu/course/publish",
    "title": "发布课程",
    "description": "<p>发布课程</p>",
    "name": "publish",
    "group": "course-admin-controller:_课程管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>权限令牌</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "courseId",
            "description": "<p>课程id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>课程数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 20000,\n    \"success\" : true,\n    \"data\" : {\n    },\n    \"message\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://47.103.203.152/admin/edu/course/publish"
      }
    ],
    "version": "1.0.0",
    "filename": "routers/edu/course.js",
    "groupTitle": "course-admin-controller:_课程管理"
  },
  {
    "type": "post",
    "url": "/admin/edu/course/save",
    "title": "新增课程",
    "description": "<p>新增课程</p>",
    "name": "save",
    "group": "course-admin-controller:_课程管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>权限令牌</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "teacherId",
            "description": "<p>讲师id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subjectId",
            "description": "<p>课程分类id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subjectParentId",
            "description": "<p>父级课程分类id(0代表一级分类)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>课程名称</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>课程价格（0代表免费）</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "lessonNum",
            "description": "<p>课程总课时</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>课程简介</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cover",
            "description": "<p>可选，课程图片</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>课程数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 20000,\n    \"success\" : true,\n    \"data\" : {\n    },\n    \"message\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://47.103.203.152/admin/edu/course/save"
      }
    ],
    "version": "1.0.0",
    "filename": "routers/edu/course.js",
    "groupTitle": "course-admin-controller:_课程管理"
  },
  {
    "type": "put",
    "url": "/admin/edu/course/update",
    "title": "更新课程",
    "description": "<p>更新课程</p>",
    "name": "update",
    "group": "course-admin-controller:_课程管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>权限令牌</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "courseId",
            "description": "<p>课程id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "teacherId",
            "description": "<p>可选，讲师id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subjectId",
            "description": "<p>可选，课程分类id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subjectParentId",
            "description": "<p>可选，父级课程分类id(0代表一级分类)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>可选，课程名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": "<p>可选，课程价格（0代表免费）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lessonNum",
            "description": "<p>可选，课程总课时</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>可选，课程简介</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cover",
            "description": "<p>可选，课程图片</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>课程数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 20000,\n    \"success\" : true,\n    \"data\" : {\n    },\n    \"message\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://47.103.203.152/admin/edu/course/update"
      }
    ],
    "version": "1.0.0",
    "filename": "routers/edu/course.js",
    "groupTitle": "course-admin-controller:_课程管理"
  },
  {
    "type": "get",
    "url": "/admin/acl/index/info",
    "title": "查询用户信息",
    "description": "<p>查询用户信息</p>",
    "name": "info",
    "group": "index-controller:_后台登录与权限管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>权限令牌</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>用户头像</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "permissionValueList",
            "description": "<p>用户按钮权限列表</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 20000,\n    \"success\" : true,\n    \"data\" : {\n      \"name\":\" \"admin\",\n      \"avatar\": \"https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif\",\n      \"permissionValueList\": [\"user.add\", \"user.update\", \"user.remove\", \"user.assign\"]\n    },\n    \"message\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://47.103.203.152/admin/acl/index/info"
      }
    ],
    "version": "1.0.0",
    "filename": "routers/acl/login.js",
    "groupTitle": "index-controller:_后台登录与权限管理"
  },
  {
    "type": "post",
    "url": "/admin/acl/index/login",
    "title": "用户登录",
    "description": "<p>用户登录</p>",
    "name": "login",
    "group": "index-controller:_后台登录与权限管理",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>权限令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 20000,\n    \"success\" : true,\n    \"data\" : {\n        \"token\" : \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlN2Q1YWQ0MDA0YjM2MGM5YzhkN2IwZiIsImlhdCI6MTU4NjA5OTg3NywiZXhwIjoxNTg2NzA0Njc3fQ.B-N-xZXgxA_LOmEAJ0ZTYmXPt89KRGo0ZSjvwx9dhog\",\n    },\n    \"message\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://47.103.203.152/admin/acl/index/login"
      }
    ],
    "version": "1.0.0",
    "filename": "routers/acl/login.js",
    "groupTitle": "index-controller:_后台登录与权限管理"
  },
  {
    "type": "post",
    "url": "/admin/acl/index/logout",
    "title": "用户登出",
    "description": "<p>用户登出</p>",
    "name": "logout",
    "group": "index-controller:_后台登录与权限管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>权限令牌</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 20000,\n    \"success\" : true,\n    \"data\" : {},\n    \"message\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://47.103.203.152/admin/acl/index/logout"
      }
    ],
    "version": "1.0.0",
    "filename": "routers/acl/login.js",
    "groupTitle": "index-controller:_后台登录与权限管理"
  },
  {
    "type": "get",
    "url": "/admin/acl/index/menu",
    "title": "查询用户菜单",
    "description": "<p>查询用户菜单</p>",
    "name": "menu",
    "group": "index-controller:_后台登录与权限管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>权限令牌</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "permissionList",
            "description": "<p>用户路由权限列表</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 20000,\n    \"success\" : true,\n    \"data\" : {\n      \"permissionList\": [{}]\n    },\n    \"message\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://47.103.203.152/admin/acl/index/menu"
      }
    ],
    "version": "1.0.0",
    "filename": "routers/acl/login.js",
    "groupTitle": "index-controller:_后台登录与权限管理"
  },
  {
    "type": "delete",
    "url": "/admin/edu/lesson/batchRemove",
    "title": "批量删除多个课时",
    "description": "<p>批量删除多个课时</p>",
    "name": "batchRemove",
    "group": "lesson-admin-controller:_课时管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>权限令牌</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "idList",
            "description": "<p>课时id列表</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 20000,\n    \"success\" : true,\n    \"data\" : {\n    },\n    \"message\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://47.103.203.152/admin/edu/lesson/batchRemove"
      }
    ],
    "version": "1.0.0",
    "filename": "routers/edu/lesson.js",
    "groupTitle": "lesson-admin-controller:_课时管理"
  },
  {
    "type": "get",
    "url": "/admin/edu/lesson/get/:chapterId",
    "title": "获取章节所有课时列表",
    "description": "<p>获取章节所有课时列表</p>",
    "name": "get",
    "group": "lesson-admin-controller:_课时管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>权限令牌</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "chapterId",
            "description": "<p>章节id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 20000,\n    \"success\" : true,\n    \"data\" : {\n    },\n    \"message\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://47.103.203.152/admin/edu/lesson/get/:chapterId"
      }
    ],
    "version": "1.0.0",
    "filename": "routers/edu/lesson.js",
    "groupTitle": "lesson-admin-controller:_课时管理"
  },
  {
    "type": "delete",
    "url": "/admin/edu/lesson/remove/:lessonId",
    "title": "删除课时",
    "description": "<p>删除课时</p>",
    "name": "remove",
    "group": "lesson-admin-controller:_课时管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>权限令牌</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lessonId",
            "description": "<p>课时id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 20000,\n    \"success\" : true,\n    \"data\" : {\n    },\n    \"message\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://47.103.203.152/admin/edu/lesson/remove/:lessonId"
      }
    ],
    "version": "1.0.0",
    "filename": "routers/edu/lesson.js",
    "groupTitle": "lesson-admin-controller:_课时管理"
  },
  {
    "type": "post",
    "url": "/admin/edu/lesson/save",
    "title": "新增课时",
    "description": "<p>新增课时</p>",
    "name": "save",
    "group": "lesson-admin-controller:_课时管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>权限令牌</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "chapterId",
            "description": "<p>章节id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>课时名称</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "free",
            "description": "<p>是否免费</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "video",
            "description": "<p>视频路径</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 20000,\n    \"success\" : true,\n    \"data\" : {\n    },\n    \"message\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://47.103.203.152/admin/edu/lesson/save"
      }
    ],
    "version": "1.0.0",
    "filename": "routers/edu/lesson.js",
    "groupTitle": "lesson-admin-controller:_课时管理"
  },
  {
    "type": "put",
    "url": "/admin/edu/lesson/update",
    "title": "更新课时",
    "description": "<p>更新课时</p>",
    "name": "update",
    "group": "lesson-admin-controller:_课时管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>权限令牌</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lessonId",
            "description": "<p>课时id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>课时标题</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "free",
            "description": "<p>是否免费</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "video",
            "description": "<p>视频路径</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 20000,\n    \"success\" : true,\n    \"data\" : {\n    },\n    \"message\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://47.103.203.152/admin/edu/lesson/update"
      }
    ],
    "version": "1.0.0",
    "filename": "routers/edu/lesson.js",
    "groupTitle": "lesson-admin-controller:_课时管理"
  },
  {
    "type": "get",
    "url": "/admin/acl/permission",
    "title": "获取所有菜单",
    "description": "<p>获取所有菜单</p>",
    "name": "/",
    "group": "permission-admin-controller:_菜单管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>权限令牌</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "menuList",
            "description": "<p>所有权限菜单列表</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 20000,\n    \"success\" : true,\n    \"data\" : {\n      \"menuList\": [{}]\n    },\n    \"message\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://47.103.203.152/admin/acl/permission"
      }
    ],
    "version": "1.0.0",
    "filename": "routers/acl/permission.js",
    "groupTitle": "permission-admin-controller:_菜单管理"
  },
  {
    "type": "post",
    "url": "/admin/acl/permission/doAssign",
    "title": "给角色分配权限菜单",
    "description": "<p>给角色分配权限菜单</p>",
    "name": "doAssign",
    "group": "permission-admin-controller:_菜单管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>权限令牌</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "roleId",
            "description": "<p>角色id</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "permissionId",
            "description": "<p>权限菜单id列表</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 20000,\n    \"success\" : true,\n    \"data\" : {},\n    \"message\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://47.103.203.152/admin/acl/permission/doAssign"
      }
    ],
    "version": "1.0.0",
    "filename": "routers/acl/permission.js",
    "groupTitle": "permission-admin-controller:_菜单管理"
  },
  {
    "type": "delete",
    "url": "/admin/acl/permission/remove/:id",
    "title": "递归删除权限菜单",
    "description": "<p>递归删除权限菜单</p>",
    "name": "remove",
    "group": "permission-admin-controller:_菜单管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>权限令牌</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>菜单id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 20000,\n    \"success\" : true,\n    \"data\" : {},\n    \"message\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://47.103.203.152/admin/acl/permission/remove/:id"
      }
    ],
    "version": "1.0.0",
    "filename": "routers/acl/permission.js",
    "groupTitle": "permission-admin-controller:_菜单管理"
  },
  {
    "type": "get",
    "url": "/admin/acl/permission/toAssign/:id",
    "title": "根据角色获取权限菜单",
    "description": "<p>根据角色获取权限菜单</p>",
    "name": "remove",
    "group": "permission-admin-controller:_菜单管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>权限令牌</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>角色id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>权限菜单列表</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 20000,\n    \"success\" : true,\n    \"data\" : [{}],\n    \"message\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://47.103.203.152/admin/acl/permission/remove/:id"
      }
    ],
    "version": "1.0.0",
    "filename": "routers/acl/permission.js",
    "groupTitle": "permission-admin-controller:_菜单管理"
  },
  {
    "type": "post",
    "url": "/admin/acl/permission/save",
    "title": "新增菜单",
    "description": "<p>新增菜单</p>",
    "name": "save",
    "group": "permission-admin-controller:_菜单管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>权限令牌</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>菜单名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>可选, 菜单访问路径</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pid",
            "description": "<p>父级菜单id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "1",
              "2"
            ],
            "optional": false,
            "field": "type",
            "description": "<p>菜单类型(1: 菜单 2: 按钮)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "1",
              "2",
              "3",
              "4"
            ],
            "optional": false,
            "field": "level",
            "description": "<p>菜单等级</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "icon",
            "description": "<p>可选, 菜单图标</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "permissionValue",
            "description": "<p>可选, 菜单权限值</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>新建的菜单</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 20000,\n    \"success\" : true,\n    \"data\" : {},\n    \"message\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://47.103.203.152/admin/acl/permission/save"
      }
    ],
    "version": "1.0.0",
    "filename": "routers/acl/permission.js",
    "groupTitle": "permission-admin-controller:_菜单管理"
  },
  {
    "type": "put",
    "url": "/admin/acl/permission/update",
    "title": "修改菜单",
    "description": "<p>修改菜单</p>",
    "name": "update",
    "group": "permission-admin-controller:_菜单管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>权限令牌</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "permission",
            "description": "<p>权限菜单对象</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"id\": \"5e7d9b9aca7cca2214abf435\",\n   \"name\": \"用户管理\",\n   \"path\": \"/user/list\",\n   \"pid\": \"5e7d9bb3ca7cca2214abf436\",\n   \"type\": 1,\n   \"level\": 2,\n   \"icon\": \"user\",\n   \"permissionValue\": []\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 20000,\n    \"success\" : true,\n    \"data\" : {},\n    \"message\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://47.103.203.152/admin/acl/permission/update"
      }
    ],
    "version": "1.0.0",
    "filename": "routers/acl/permission.js",
    "groupTitle": "permission-admin-controller:_菜单管理"
  },
  {
    "type": "get",
    "url": "/reset",
    "title": "重置数据",
    "description": "<p>重置数据</p>",
    "name": "reset",
    "group": "reset:_重置数据",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 20000,\n    \"success\" : true,\n    \"data\" : {\n    },\n    \"message\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://47.103.203.152/reset"
      }
    ],
    "version": "1.0.0",
    "filename": "routers/reset.js",
    "groupTitle": "reset:_重置数据"
  },
  {
    "type": "delete",
    "url": "/admin/acl/role/batchRemove",
    "title": "批量删除多个角色数据",
    "description": "<p>批量删除多个角色数据</p>",
    "name": "batchRemove",
    "group": "role-admin-controller:_角色管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>权限令牌</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "idList",
            "description": "<p>角色id列表</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 20000,\n    \"success\" : true,\n    \"data\" : {},\n    \"message\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://47.103.203.152/admin/acl/role/batchRemove"
      }
    ],
    "version": "1.0.0",
    "filename": "routers/acl/role.js",
    "groupTitle": "role-admin-controller:_角色管理"
  },
  {
    "type": "get",
    "url": "/admin/acl/role/get/:id",
    "title": "根据id获取角色数据",
    "description": "<p>根据id获取角色数据</p>",
    "name": "get",
    "group": "role-admin-controller:_角色管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>权限令牌</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>角色id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>角色数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 20000,\n    \"success\" : true,\n    \"data\" : {},\n    \"message\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://47.103.203.152/admin/acl/role/get/:id"
      }
    ],
    "version": "1.0.0",
    "filename": "routers/acl/role.js",
    "groupTitle": "role-admin-controller:_角色管理"
  },
  {
    "type": "get",
    "url": "/admin/acl/role/:page/:limit",
    "title": "获取角色分页列表",
    "description": "<p>获取角色分页列表</p>",
    "name": "page",
    "group": "role-admin-controller:_角色管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>权限令牌</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>当前页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>每页数量</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "roleName",
            "description": "<p>可选, 角色名称</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>总数</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "items",
            "description": "<p>角色列表分页数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 20000,\n    \"success\" : true,\n    \"data\" : {\n      \"total\": 100,\n      \"items\": [{}, {}]\n    },\n    \"message\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://47.103.203.152/admin/acl/role/:page/:limit"
      }
    ],
    "version": "1.0.0",
    "filename": "routers/acl/role.js",
    "groupTitle": "role-admin-controller:_角色管理"
  },
  {
    "type": "delete",
    "url": "/admin/acl/role/remove/:id",
    "title": "删除单个角色数据",
    "description": "<p>删除单个角色数据</p>",
    "name": "remove",
    "group": "role-admin-controller:_角色管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>权限令牌</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>角色id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 20000,\n    \"success\" : true,\n    \"data\" : {},\n    \"message\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://47.103.203.152/admin/acl/role/remove/:id"
      }
    ],
    "version": "1.0.0",
    "filename": "routers/acl/role.js",
    "groupTitle": "role-admin-controller:_角色管理"
  },
  {
    "type": "post",
    "url": "/admin/acl/role/save",
    "title": "添加角色",
    "description": "<p>添加角色</p>",
    "name": "save",
    "group": "role-admin-controller:_角色管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>权限令牌</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "roleName",
            "description": "<p>角色名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>角色昵称</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>角色数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 20000,\n    \"success\" : true,\n    \"data\" : {},\n    \"message\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://47.103.203.152/admin/acl/role/save"
      }
    ],
    "version": "1.0.0",
    "filename": "routers/acl/role.js",
    "groupTitle": "role-admin-controller:_角色管理"
  },
  {
    "type": "put",
    "url": "/admin/acl/role/update",
    "title": "更新角色数据",
    "description": "<p>更新角色数据</p>",
    "name": "update",
    "group": "role-admin-controller:_角色管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>权限令牌</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "roleName",
            "description": "<p>角色名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remark",
            "description": "<p>角色昵称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>角色id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 20000,\n    \"success\" : true,\n    \"data\" : {},\n    \"message\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://47.103.203.152/admin/acl/role/update"
      }
    ],
    "version": "1.0.0",
    "filename": "routers/acl/role.js",
    "groupTitle": "role-admin-controller:_角色管理"
  },
  {
    "type": "get",
    "url": "/admin/edu/subject/:page/:limit",
    "title": "获取一级课程分类列表",
    "description": "<p>获取一级课程分类列表</p>",
    "name": "/:page/:limit",
    "group": "subject-admin-controller:_课程分类管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>权限令牌</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>当前页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>每页数量</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>总数</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "items",
            "description": "<p>课程分类分页数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 20000,\n    \"success\" : true,\n    \"data\" : {\n      \"total\": 100,\n      \"items\": [{}, {}]\n    },\n    \"message\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://47.103.203.152/admin/edu/subject/:page/:limit"
      }
    ],
    "version": "1.0.0",
    "filename": "routers/edu/subject.js",
    "groupTitle": "subject-admin-controller:_课程分类管理"
  },
  {
    "type": "delete",
    "url": "/admin/edu/subject/remove/:id",
    "title": "删除课程分类数据",
    "description": "<p>删除课程分类数据</p>",
    "name": "delete",
    "group": "subject-admin-controller:_课程分类管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>权限令牌</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>课程分类id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 20000,\n    \"success\" : true,\n    \"data\" : {\n    },\n    \"message\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://47.103.203.152/admin/edu/subject/remove/:id"
      }
    ],
    "version": "1.0.0",
    "filename": "routers/edu/subject.js",
    "groupTitle": "subject-admin-controller:_课程分类管理"
  },
  {
    "type": "get",
    "url": "/admin/edu/subject/get/:parentId",
    "title": "获取所有二级课程分类数据",
    "description": "<p>获取所有二级课程分类数据</p>",
    "name": "get",
    "group": "subject-admin-controller:_课程分类管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>权限令牌</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parentId",
            "description": "<p>父级分类Id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>总数</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "items",
            "description": "<p>二级课程分类数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 20000,\n    \"success\" : true,\n    \"data\" : {\n      \"total\": 100,\n      \"items\": [{}, {}]\n    },\n    \"message\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://47.103.203.152/admin/edu/subject/get/:parentId"
      }
    ],
    "version": "1.0.0",
    "filename": "routers/edu/subject.js",
    "groupTitle": "subject-admin-controller:_课程分类管理"
  },
  {
    "type": "get",
    "url": "/admin/edu/subject/get",
    "title": "获取分类数据",
    "description": "<p>获取分类数据</p>",
    "name": "getsubject",
    "group": "subject-admin-controller:_课程分类管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>权限令牌</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>课程分类id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>课程分类数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 20000,\n    \"success\" : true,\n    \"data\" : {\n    },\n    \"message\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://47.103.203.152/admin/edu/subject/get"
      }
    ],
    "version": "1.0.0",
    "filename": "routers/edu/subject.js",
    "groupTitle": "subject-admin-controller:_课程分类管理"
  },
  {
    "type": "post",
    "url": "/admin/edu/subject/save",
    "title": "添加课程分类",
    "description": "<p>添加课程分类</p>",
    "name": "save",
    "group": "subject-admin-controller:_课程分类管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>权限令牌</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>课程分类名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "parentId",
            "description": "<p>父级分类id(0代表一级分类)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>课程分类数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 20000,\n    \"success\" : true,\n    \"data\" : {\n    },\n    \"message\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://47.103.203.152/admin/edu/subject/save"
      }
    ],
    "version": "1.0.0",
    "filename": "routers/edu/subject.js",
    "groupTitle": "subject-admin-controller:_课程分类管理"
  },
  {
    "type": "get",
    "url": "/admin/edu/subject",
    "title": "获取所有一级课程分类数据",
    "description": "<p>获取所有一级课程分类数据</p>",
    "name": "subject",
    "group": "subject-admin-controller:_课程分类管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>权限令牌</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "[]",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 20000,\n    \"success\" : true,\n    \"data\" : [],\n    \"message\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://47.103.203.152/admin/edu/subject"
      }
    ],
    "version": "1.0.0",
    "filename": "routers/edu/subject.js",
    "groupTitle": "subject-admin-controller:_课程分类管理"
  },
  {
    "type": "get",
    "url": "/admin/edu/subject",
    "title": "获取所有一级课程分类数据",
    "description": "<p>获取所有一级课程分类数据</p>",
    "name": "subject",
    "group": "subject-admin-controller:_课程分类管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>权限令牌</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "[]",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 20000,\n    \"success\" : true,\n    \"data\" : [],\n    \"message\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://47.103.203.152/admin/edu/subject"
      }
    ],
    "version": "1.0.0",
    "filename": "routers/edu/subject.js",
    "groupTitle": "subject-admin-controller:_课程分类管理"
  },
  {
    "type": "put",
    "url": "/admin/edu/subject/update",
    "title": "更新课程分类",
    "description": "<p>更新课程分类</p>",
    "name": "update",
    "group": "subject-admin-controller:_课程分类管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>权限令牌</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>课程分类id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>课程分类名称</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>课程分类数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 20000,\n    \"success\" : true,\n    \"data\" : {\n    },\n    \"message\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://47.103.203.152/admin/edu/subject/update"
      }
    ],
    "version": "1.0.0",
    "filename": "routers/edu/subject.js",
    "groupTitle": "subject-admin-controller:_课程分类管理"
  },
  {
    "type": "delete",
    "url": "/admin/edu/teacher/batchRemove",
    "title": "批量删除讲师",
    "description": "<p>批量删除讲师</p>",
    "name": "batchRemove",
    "group": "teacher-admin-controller:_讲师管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>权限令牌</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "idList",
            "description": "<p>讲师id列表</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 20000,\n    \"success\" : true,\n    \"data\" : {},\n    \"message\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://47.103.203.152/admin/edu/teacher/batchRemove"
      }
    ],
    "version": "1.0.0",
    "filename": "routers/edu/teacher.js",
    "groupTitle": "teacher-admin-controller:_讲师管理"
  },
  {
    "type": "get",
    "url": "/admin/edu/teacher/get/:id",
    "title": "获取讲师",
    "description": "<p>获取讲师</p>",
    "name": "get",
    "group": "teacher-admin-controller:_讲师管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>权限令牌</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>讲师id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>讲师id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>讲师名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "intro",
            "description": "<p>讲师详细介绍</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "career",
            "description": "<p>讲师简介</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "allowedValues": [
              "1",
              "2"
            ],
            "optional": false,
            "field": "level",
            "description": "<p>讲师头衔(1: 高级讲师, 2: 首席讲师)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>讲师头像</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "sort",
            "description": "<p>讲师排序</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "gmtCreate",
            "description": "<p>创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "gmtModified",
            "description": "<p>修改时间</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 20000,\n    \"success\" : true,\n    \"data\" : {\n      \"_id\": \"1196725201876611073\",\n      \"gmtCreate\": \"2019-11-19 17:41:37\",\n      \"gmtModified\": \"2019-11-19 17:43:30\",\n      \"name\": \"测试\",\n      \"intro\": \"江苏省重大科技成果转化项目\",\n      \"career\": \"高级讲师\",\n      \"level\": 1,\n      \"avatar\": \"https://guli-file-190513.oss-cn-beijing.aliyuncs.com/avatar/default.jpg\",\n      \"sort\": 0\n    },\n    \"message\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://47.103.203.152/admin/edu/teacher/get/:id"
      }
    ],
    "version": "1.0.0",
    "filename": "routers/edu/teacher.js",
    "groupTitle": "teacher-admin-controller:_讲师管理"
  },
  {
    "type": "get",
    "url": "/admin/edu/teacher/list",
    "title": "获取所有讲师列表",
    "description": "<p>获取所有讲师列表</p>",
    "name": "list",
    "group": "teacher-admin-controller:_讲师管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>权限令牌</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>所有讲师列表</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 20000,\n    \"success\" : true,\n    \"data\" : [{}],\n    \"message\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://47.103.203.152/admin/edu/teacher/list"
      }
    ],
    "version": "1.0.0",
    "filename": "routers/edu/teacher.js",
    "groupTitle": "teacher-admin-controller:_讲师管理"
  },
  {
    "type": "get",
    "url": "/admin/edu/teacher/name/:key",
    "title": "查询讲师姓名列表",
    "description": "<p>根据讲师姓名关键字查询讲师姓名列表</p>",
    "name": "name",
    "group": "teacher-admin-controller:_讲师管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>权限令牌</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>讲师姓名关键字</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>讲师列表数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 20000,\n    \"success\" : true,\n    \"data\" : [{\"_id\": \"xxx\", \"name\": \"yyy\"}],\n    \"message\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://47.103.203.152/admin/edu/teacher/name/:key"
      }
    ],
    "version": "1.0.0",
    "filename": "routers/edu/teacher.js",
    "groupTitle": "teacher-admin-controller:_讲师管理"
  },
  {
    "type": "get",
    "url": "/admin/edu/teacher/:page/:limit",
    "title": "获取讲师分页列表",
    "description": "<p>获取讲师分页列表</p>",
    "name": "page",
    "group": "teacher-admin-controller:_讲师管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>权限令牌</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>当前页数</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>每页数量</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>可选, 讲师姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "1",
              "2"
            ],
            "optional": false,
            "field": "level",
            "description": "<p>可选,讲师级别</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "gmtCreateBegin",
            "description": "<p>可选,开始时间</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "gmtCreateEnd",
            "description": "<p>可选,结束时间</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>总数</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "items",
            "description": "<p>讲师列表数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 20000,\n    \"success\" : true,\n    \"data\" : {\"total\": 10, \"items\": [{}, {}]},\n    \"message\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://47.103.203.152/admin/edu/teacher/:page/:limit"
      }
    ],
    "version": "1.0.0",
    "filename": "routers/edu/teacher.js",
    "groupTitle": "teacher-admin-controller:_讲师管理"
  },
  {
    "type": "delete",
    "url": "/admin/edu/teacher/remove/:id",
    "title": "删除讲师",
    "description": "<p>删除讲师</p>",
    "name": "remove",
    "group": "teacher-admin-controller:_讲师管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>权限令牌</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>讲师id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 20000,\n    \"success\" : true,\n    \"data\" : {},\n    \"message\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://47.103.203.152/admin/edu/teacher/remove/:id"
      }
    ],
    "version": "1.0.0",
    "filename": "routers/edu/teacher.js",
    "groupTitle": "teacher-admin-controller:_讲师管理"
  },
  {
    "type": "post",
    "url": "/admin/edu/teacher/save",
    "title": "新增讲师",
    "description": "<p>新增讲师</p>",
    "name": "save",
    "group": "teacher-admin-controller:_讲师管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>权限令牌</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>讲师姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "1",
              "2"
            ],
            "optional": false,
            "field": "level",
            "description": "<p>讲师级别</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "intro",
            "description": "<p>详细介绍</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "career",
            "description": "<p>简介</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>头像</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sort",
            "description": "<p>排序</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>讲师数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 20000,\n    \"success\" : true,\n    \"data\" : {},\n    \"message\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://47.103.203.152/admin/edu/teacher/save"
      }
    ],
    "version": "1.0.0",
    "filename": "routers/edu/teacher.js",
    "groupTitle": "teacher-admin-controller:_讲师管理"
  },
  {
    "type": "put",
    "url": "/admin/edu/teacher/update",
    "title": "修改讲师",
    "description": "<p>修改讲师</p>",
    "name": "update",
    "group": "teacher-admin-controller:_讲师管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>权限令牌</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>讲师id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>讲师姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "1",
              "2"
            ],
            "optional": false,
            "field": "level",
            "description": "<p>讲师级别</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "intro",
            "description": "<p>详细介绍</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "career",
            "description": "<p>简介</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>头像</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "sort",
            "description": "<p>排序</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 20000,\n    \"success\" : true,\n    \"data\" : {},\n    \"message\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://47.103.203.152/admin/edu/teacher/update"
      }
    ],
    "version": "1.0.0",
    "filename": "routers/edu/teacher.js",
    "groupTitle": "teacher-admin-controller:_讲师管理"
  },
  {
    "type": "get",
    "url": "/uploadtoken",
    "title": "获取七牛云上传凭据",
    "description": "<p>获取七牛云上传凭据</p>",
    "name": "uploadtoken",
    "group": "uploadtoken:_七牛云管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>权限令牌</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "uploadToken",
            "description": "<p>上传凭证</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "expires",
            "description": "<p>过期时间</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 20000,\n    \"success\" : true,\n    \"data\" : \"\",\n    \"message\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://47.103.203.152/uploadtoken"
      }
    ],
    "version": "1.0.0",
    "filename": "routers/upload.js",
    "groupTitle": "uploadtoken:_七牛云管理"
  },
  {
    "type": "delete",
    "url": "/admin/acl/user/batchRemove",
    "title": "批量删除用户",
    "description": "<p>批量删除用户</p>",
    "name": "batchRemove",
    "group": "user-admin-controller:_用户管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>权限令牌</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "idList",
            "description": "<p>用户id列表</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 20000,\n    \"success\" : true,\n    \"data\" : {\n    },\n    \"message\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://47.103.203.152/admin/acl/user/batchRemove"
      }
    ],
    "version": "1.0.0",
    "filename": "routers/acl/user.js",
    "groupTitle": "user-admin-controller:_用户管理"
  },
  {
    "type": "post",
    "url": "/admin/acl/user/doAssign",
    "title": "给用户分配角色",
    "description": "<p>给用户分配角色</p>",
    "name": "doAssign",
    "group": "user-admin-controller:_用户管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>权限令牌</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "roleId",
            "description": "<p>角色id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 20000,\n    \"success\" : true,\n    \"data\" : {\n    },\n    \"message\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://47.103.203.152/admin/acl/user/doAssign"
      }
    ],
    "version": "1.0.0",
    "filename": "routers/acl/user.js",
    "groupTitle": "user-admin-controller:_用户管理"
  },
  {
    "type": "get",
    "url": "/admin/acl/user/get/:id",
    "title": "根据id获取用户数据",
    "description": "<p>根据id获取用户数据</p>",
    "name": "get",
    "group": "user-admin-controller:_用户管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>权限令牌</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>用户id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>用户数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 20000,\n    \"success\" : true,\n    \"data\" : {\n    },\n    \"message\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://47.103.203.152/admin/acl/user/get/:id"
      }
    ],
    "version": "1.0.0",
    "filename": "routers/acl/user.js",
    "groupTitle": "user-admin-controller:_用户管理"
  },
  {
    "type": "get",
    "url": "/admin/acl/user/:page/:limit",
    "title": "获取用户分页列表",
    "description": "<p>获取用户分页列表</p>",
    "name": "page",
    "group": "user-admin-controller:_用户管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>权限令牌</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>当前页码</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "limit",
            "description": "<p>每页数量</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nickName",
            "description": "<p>可选, 昵称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>可选, 用户名</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>总数</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "items",
            "description": "<p>用户列表分页数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 20000,\n    \"success\" : true,\n    \"data\" : {\n      \"total\": 100,\n      \"items\": [{}, {}]\n    },\n    \"message\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://47.103.203.152/admin/acl/user/:page/:limit"
      }
    ],
    "version": "1.0.0",
    "filename": "routers/acl/user.js",
    "groupTitle": "user-admin-controller:_用户管理"
  },
  {
    "type": "delete",
    "url": "/admin/acl/user/remove/:id",
    "title": "删除单个用户",
    "description": "<p>删除单个用户</p>",
    "name": "remove",
    "group": "user-admin-controller:_用户管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>权限令牌</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>用户id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 20000,\n    \"success\" : true,\n    \"data\" : {\n    },\n    \"message\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://47.103.203.152/admin/acl/user/remove/:id"
      }
    ],
    "version": "1.0.0",
    "filename": "routers/acl/user.js",
    "groupTitle": "user-admin-controller:_用户管理"
  },
  {
    "type": "post",
    "url": "/admin/acl/user/save",
    "title": "添加用户",
    "description": "<p>添加用户</p>",
    "name": "save",
    "group": "user-admin-controller:_用户管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>权限令牌</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nickName",
            "description": "<p>昵称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "salt",
            "description": "<p>可选, 加盐</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>可选, 用户头像</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>用户数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 20000,\n    \"success\" : true,\n    \"data\" : {\n    },\n    \"message\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://47.103.203.152/admin/acl/user/save"
      }
    ],
    "version": "1.0.0",
    "filename": "routers/acl/user.js",
    "groupTitle": "user-admin-controller:_用户管理"
  },
  {
    "type": "get",
    "url": "/admin/acl/user/toAssign/:id",
    "title": "查询用户的角色数据",
    "description": "<p>查询用户的角色数据（自己所属角色数据和所有角色数据）</p>",
    "name": "toAssign",
    "group": "user-admin-controller:_用户管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>权限令牌</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>用户id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "assignRoles",
            "description": "<p>当前用户的角色数据</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "allRolesList",
            "description": "<p>所有角色列表数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 20000,\n    \"success\" : true,\n    \"data\" : {\n      \"assignRoles\": {},\n      \"allRolesList\": [{}, {}]\n    },\n    \"message\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://47.103.203.152/admin/acl/user/toAssign/:id"
      }
    ],
    "version": "1.0.0",
    "filename": "routers/acl/user.js",
    "groupTitle": "user-admin-controller:_用户管理"
  },
  {
    "type": "put",
    "url": "/admin/acl/user/update",
    "title": "更新用户",
    "description": "<p>更新用户</p>",
    "name": "update",
    "group": "user-admin-controller:_用户管理",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>权限令牌</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nickName",
            "description": "<p>昵称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "salt",
            "description": "<p>可选, 加盐</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>可选, 用户头像</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\": 20000,\n    \"success\" : true,\n    \"data\" : {\n    },\n    \"message\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://47.103.203.152/admin/acl/user/update"
      }
    ],
    "version": "1.0.0",
    "filename": "routers/acl/user.js",
    "groupTitle": "user-admin-controller:_用户管理"
  }
] });
