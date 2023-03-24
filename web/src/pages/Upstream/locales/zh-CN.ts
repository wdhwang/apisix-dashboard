/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
export default {
  'page.upstream.step.select.upstream': '選擇上游服務',
  'page.upstream.step.select.upstream.select.option': '手動填寫',
  'page.upstream.step.select.upstream.select.option.serviceSelected':
    '手動填寫（當前配置將會覆蓋已繫結的服務）',
  'page.upstream.step.select.upstream.select.none': '無',
  'page.upstream.step.backend.server.domain.or.ip': '後端服務域名或 IP',
  'page.upstream.form.item-label.node.domain.or.ip': '目標節點',
  'page.upstream.step.input.domain.name.or.ip': '請輸入域名或 IP',
  'page.upstream.step.domain.name.or.ip': '主機名或 IP',
  'page.upstream.step.host': '主機名',
  'page.upstream.step.valid.domain.name.or.ip': '請輸入合法的域名或 IP',
  'page.upstream.step.input.port': '請輸入',
  'page.upstream.step.port': '埠',
  'page.upstream.step.input.weight': '請輸入權重',
  'page.upstream.step.weight': '權重',
  'page.upstream.step.create': '建立',
  'page.upstream.step.name': '名稱',
  'page.upstream.step.name.should.unique': '名稱需全域性唯一',
  'page.upstream.step.input.upstream.name': '請輸入上游服務的名稱',
  'page.upstream.step.description': '描述',
  'page.upstream.step.input.description': '請輸入上游服務的描述',
  'page.upstream.step.type': '負載均衡演算法',
  'page.upstream.step.pass-host': 'Host 請求頭',
  'page.upstream.step.pass-host.pass': '保持與客戶端請求一致的主機名',
  'page.upstream.step.pass-host.node': '使用目標節點列表中的主機名或 IP',
  'page.upstream.step.pass-host.rewrite': '自定義 Host 請求頭（即將廢棄）',
  'page.upstream.step.pass-host.upstream_host': '自定義主機名',
  'page.upstream.step.connect.timeout': '連線超時',
  'page.upstream.step.connect.timeout.desc': '建立從請求到上游伺服器的連線的超時時間',
  'page.upstream.step.input.connect.timeout': '請輸入連線超時時間',
  'page.upstream.step.send.timeout': '傳送超時',
  'page.upstream.step.send.timeout.desc': '傳送資料到上游伺服器的超時時間',
  'page.upstream.step.input.send.timeout': '請輸入傳送超時時間',
  'page.upstream.step.read.timeout': '接收超時',
  'page.upstream.step.read.timeout.desc': '從上游伺服器接收資料的超時時間',
  'page.upstream.step.input.read.timeout': '請輸入接收超時時間',
  'page.upstream.step.healthyCheck.healthy.check': '健康檢查',
  'page.upstream.step.healthyCheck.healthy': '健康',
  'page.upstream.step.healthyCheck.unhealthy': '不健康',
  'page.upstream.step.healthyCheck.healthy.status': '健康狀態',
  'page.upstream.step.healthyCheck.unhealthyStatus': '不健康狀態',
  'page.upstream.step.healthyCheck.active': '主動檢查',
  'page.upstream.step.healthyCheck.active.timeout': '超時時間',
  'page.upstream.step.input.healthyCheck.active.timeout': '請輸入超時時間',
  'page.upstream.step.input.healthyCheck.activeInterval': '請輸入間隔時間',
  'page.upstream.step.input.healthyCheck.active.req_headers': '請輸入請求頭',
  'page.upstream.step.healthyCheck.passive': '被動檢查',
  'page.upstream.step.healthyCheck.passive.http_statuses': '狀態碼',
  'page.upstream.step.input.healthyCheck.passive.http_statuses': '請輸入狀態碼',
  'page.upstream.step.healthyCheck.passive.tcp_failures': 'TCP 失敗次數',
  'page.upstream.step.input.healthyCheck.passive.tcp_failures': '請輸入 TCP 失敗次數',
  'page.upstream.step.keepalive_pool': '連線池',
  'page.upstream.notificationMessage.enableHealthCheckFirst': '請先啟用探活健康檢查。',
  'page.upstream.upstream_host.required': '請輸入自定義 Host 請求頭',

  'page.upstream.create': '建立上游服務',
  'page.upstream.configure': '配置上游服務',
  'page.upstream.create.upstream.successfully': '建立上游服務成功',
  'page.upstream.edit.upstream.successfully': '更新上游服務成功',
  'page.upstream.create.basic.info': '基礎資訊',
  'page.upstream.create.preview': '預覽',

  'page.upstream.list.id': 'ID',
  'page.upstream.list.name': '名稱',
  'page.upstream.list.type': '型別',
  'page.upstream.list.description': '描述',
  'page.upstream.list.edit.time': '更新時間',
  'page.upstream.list.operation': '操作',
  'page.upstream.list.edit': '配置',
  'page.upstream.list.confirm.delete': '確定刪除該條記錄嗎？',
  'page.upstream.list.confirm': '確定',
  'page.upstream.list.cancel': '取消',
  'page.upstream.list.delete.successfully': '刪除記錄成功',
  'page.upstream.list.delete': '刪除',
  'page.upstream.list': '上游列表',
  'page.upstream.list.input': '請輸入',
  'page.upstream.list.create': '建立',

  'page.upstream.type.roundrobin': '帶權輪詢（Round Robin）',
  'page.upstream.type.chash': '一致性雜湊（CHash）',
  'page.upstream.type.ewma': '指數加權移動平均法（EWMA）',
  'page.upstream.type.least_conn': '最小連線數（least_conn）',

  'page.upstream.list.content':
    '上游列表包含了已建立的上游服務（即後端服務），可以對上游服務的多個目標節點進行負載均衡和健康檢查。',

  'page.upstream.checks.active.timeout.description': '主動健康檢查的套接字的超時時間',
  'page.upstream.checks.active.unhealthy.interval.description':
    '對不健康的上游服務目標節點進行主動健康檢查的間隔時間，預設值為0，表示對不健康節點不進行主動健康檢查。',
  'page.upstream.checks.passive.healthy.http_statuses.description':
    '當被動健康檢查的探針返回值是 HTTP 狀態碼列表的某一個值時，代表健康狀態是由代理流量產生的。',
  'page.upstream.checks.passive.unhealthy.http_statuses.description':
    '當被動健康檢查的探針返回值是 HTTP 狀態碼列表的某一個值時，代表不健康狀態是由代理流量產生的。',
  'page.upstream.checks.passive.unhealthy.http_failures.description':
    '由被動健康檢查所觀察，代理流量中 HTTP 失敗的次數。如果達到此值，則認為上游服務目標節點是不健康的。',
  'page.upstream.checks.passive.unhealthy.tcp_failures.description':
    '被動健康檢查所觀察到的代理流量中 TCP 失敗的次數。如果達到此值，則認為上游服務目標節點是不健康的。',
  'page.upstream.scheme': '協議',

  'page.upstream.other.configuration.invalid': '請檢查上游配置',
};
