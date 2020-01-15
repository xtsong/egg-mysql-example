'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async info() {
    const ctx = this.ctx;
    const userId = ctx.query.id;
    console.log(userId)
    const user = await ctx.service.home.find(userId);
    ctx.body = user;
  }
}

module.exports = HomeController;
