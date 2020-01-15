'use strict';

const Service = require('egg').Service;

class HomeService extends Service {
  async find(uid) {
    // 假如 我们拿到用户 id 从数据库获取用户详细信息
    const user = await this.app.mysql.get('user', { id: uid });
    return { user };
  }
}

module.exports = HomeService;