class MysqlService extends Service {
    /**
     * 分页查询
     * @param {表单} formName 
     * @param {限制} limit 
     * @param {起止} offset 
     * @param {正序倒序} orders
     * @param {搜索条件} where
     */
    async pages(formName,limit=20,offset=0,orders,where={}) {
      const data = await this.app.mysql.select(formName,{
        where:where,
        limit:limit,
        offset:offset
      })
      return {
          total:100,
          record:data,
      }
    }
    /**
     * 插入
     * @param {表名} formName 
     * @param {数据} data 
     */
    async install(formName,data) {
        if(!data) return false
        const result = await this.app.mysql.install(formName,data)
        return result.affectedRows === 1
    }
    /**
     * 删除
     * @param {表名} formName 
     * @param {数据} data 
     */
    async delete(formName,id) {
        if(!id) return false
        const result = await this.app.mysql.delete(formName,{id:id})
        return result.affectedRows === 1
    }
    /**
     * 更新
     * @param {表名} formName 
     * @param {数据} data 
     */
    async update(formName,data) {
        if(!data) return false
        const result = await this.app.mysql.update(formName,data)
        return result.affectedRows === 1
    }
  }