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
  'component.upstream.fields.tls.client_key': '客戶端私鑰',
  'component.upstream.fields.tls.client_key.required': '請輸入客戶端私鑰',
  'component.upstream.fields.tls.client_cert': '客戶端證書',
  'component.upstream.fields.tls.client_cert.required': '請輸入客戶端證書',

  'component.upstream.fields.upstream_type': '上游型別',
  'component.upstream.fields.upstream_type.node': '節點',
  'component.upstream.fields.upstream_type.service_discovery': '服務發現',

  'component.upstream.fields.discovery_type': '服務發現型別',
  'component.upstream.fields.discovery_type.tooltip': '服務發現型別',
  'component.upstream.fields.discovery_type.placeholder': '請選擇服務發現型別',
  'component.upstream.fields.discovery_type.type.dns': 'DNS',
  'component.upstream.fields.discovery_type.type.consul_kv': 'Consul KV',
  'component.upstream.fields.discovery_type.type.nacos': 'Nacos',
  'component.upstream.fields.discovery_type.type.eureka': 'Eureka',
  'component.upstream.fields.discovery_type.type.kubernetes': 'Kubernetes',

  'component.upstream.fields.discovery_args.group_name': '分組名',
  'component.upstream.fields.discovery_args.group_name.tooltip': '分組名',
  'component.upstream.fields.discovery_args.group_name.placeholder': '請輸入分組名',
  'component.upstream.fields.discovery_args.namespace_id': '名稱空間ID',
  'component.upstream.fields.discovery_args.namespace_id.tooltip': '名稱空間ID',
  'component.upstream.fields.discovery_args.namespace_id.placeholder': '請輸入名稱空間ID',

  'component.upstream.fields.service_name': '服務名稱',
  'component.upstream.fields.service_name.tooltip': '服務名稱',
  'component.upstream.fields.service_name.placeholder': '請輸入服務名稱',

  'component.upstream.fields.scheme.tooltip.stream':
    '該型別僅用於 Stream Route，即四層代理。參考文件：https://apisix.apache.org/zh/docs/apisix/stream-proxy/',
  'component.upstream.fields.scheme.tooltip.pubsub':
    '該型別僅用於釋出訂閱場景。參考文件：https://apisix.apache.org/zh/docs/apisix/pubsub/',

  'component.upstream.fields.tls': 'TLS',
  'component.upstream.fields.tls.tooltip': 'TLS 證書',

  'component.upstream.fields.hash_on': '雜湊位置',
  'component.upstream.fields.hash_on.tooltip': '雜湊的輸入的位置（Hash On）',

  'component.upstream.fields.key': 'Key',
  'component.upstream.fields.key.tooltip': '雜湊鍵（Hash Key）',

  'component.upstream.fields.retries': '重試次數',
  'component.upstream.fields.retries.tooltip':
    '重試機制將請求發到下一個上游節點。值為 0 表示禁用重試機制，留空表示使用可用後端節點的數量。',

  'component.upstream.fields.retry_timeout': '重試超時時間',
  'component.upstream.fields.retry_timeout.tooltip':
    '限制是否繼續重試的時間，若之前的請求和重試請求花費太多時間就不再繼續重試。0 代表不啟用重試超時機制。',

  'component.upstream.fields.keepalive_pool': '連線池',
  'component.upstream.fields.keepalive_pool.tooltip': '為 upstream 物件設定獨立的連線池',
  'component.upstream.fields.keepalive_pool.size': '容量',
  'component.upstream.fields.keepalive_pool.size.placeholder': '請輸入容量',
  'component.upstream.fields.keepalive_pool.idle_timeout': '空閒超時時間',
  'component.upstream.fields.keepalive_pool.idle_timeout.placeholder': '請輸入空閒超時時間',
  'component.upstream.fields.keepalive_pool.requests': '請求數量',
  'component.upstream.fields.keepalive_pool.requests.placeholder': '請輸入請求數量',

  'component.upstream.fields.checks.active.type': '型別',
  'component.upstream.fields.checks.active.type.tooltip':
    '是使用 HTTP 或 HTTPS 進行主動健康檢查，還是隻嘗試 TCP 連線。',

  'component.upstream.fields.checks.active.concurrency': '並行數量',
  'component.upstream.fields.checks.active.concurrency.tooltip':
    '在主動健康檢查中同時檢查的目標數量。',

  'component.upstream.fields.checks.active.host': '主機名',
  'component.upstream.fields.checks.active.host.required': '請輸入主機名',
  'component.upstream.fields.checks.active.host.tooltip':
    '進行主動健康檢查時使用的 HTTP 請求主機名',
  'component.upstream.fields.checks.active.host.scope': '僅支援字母、數字和 . ',

  'component.upstream.fields.checks.active.port': '埠',

  'component.upstream.fields.checks.active.http_path': '請求路徑',
  'component.upstream.fields.checks.active.http_path.tooltip':
    '向目標節點發出 HTTP GET 請求時應使用的路徑。',
  'component.upstream.fields.checks.active.http_path.placeholder': '請輸入 HTTP 請求路徑',

  'component.upstream.fields.checks.active.https_verify_certificate': '驗證證書',
  'component.upstream.fields.checks.active.https_verify_certificate.tooltip':
    '在使用 HTTPS 執行主動健康檢查時，是否檢查遠端主機的 SSL 證書的有效性。',

  'component.upstream.fields.checks.active.req_headers': '請求頭',
  'component.upstream.fields.checks.active.req_headers.tooltip':
    '額外的請求頭，示例：User-Agent: curl/7.29.0',

  'component.upstream.fields.checks.active.healthy.interval': '間隔時間',
  'component.upstream.fields.checks.active.healthy.interval.tooltip':
    '對健康的上游服務目標節點進行主動健康檢查的間隔時間（以秒為單位）。數值為0表示對健康節點不進行主動健康檢查。',

  'component.upstream.fields.checks.active.healthy.successes': '成功次數',
  'component.upstream.fields.checks.active.healthy.successes.tooltip':
    '主動健康檢查的 HTTP 成功次數，若達到此值，表示上游服務目標節點是健康的。',
  'component.upstream.fields.checks.active.healthy.successes.required': '請輸入成功次數',

  'component.upstream.fields.checks.active.healthy.http_statuses': '狀態碼',
  'component.upstream.fields.checks.active.healthy.http_statuses.tooltip':
    'HTTP 狀態碼列表，當探針在主動健康檢查中返回時，視為健康。',

  'component.upstream.fields.checks.active.unhealthy.timeouts': '超時時間',
  'component.upstream.fields.checks.active.unhealthy.timeouts.tooltip':
    '活動探針中認為目標不健康的超時次數。',

  'component.upstream.fields.checks.active.unhealthy.interval': '間隔時間',
  'component.upstream.fields.checks.active.unhealthy.interval.tooltip':
    '對不健康目標的主動健康檢查之間的間隔（以秒為單位）。數值為0表示不應該對健康目標進行主動探查。',
  'component.upstream.fields.checks.active.unhealthy.required': '請輸入間隔時間',

  'component.upstream.fields.checks.active.unhealthy.http_failures': 'HTTP 失敗次數',
  'component.upstream.fields.checks.active.unhealthy.http_failures.tooltip':
    '主動健康檢查的 HTTP 失敗次數，預設值為0。若達到此值，表示上游服務目標節點是不健康的。',
  'component.upstream.fields.checks.active.unhealthy.http_failures.required':
    '請輸入 HTTP 失敗次數',

  'component.upstream.fields.checks.active.unhealthy.tcp_failures': 'TCP 失敗次數',
  'component.upstream.fields.checks.active.unhealthy.tcp_failures.tooltip':
    '主動探測中 TCP 失敗次數超過該值時，認為目標不健康。',
  'component.upstream.fields.checks.active.unhealthy.tcp_failures.required': '請輸入 TCP 失敗次數',

  'component.upstream.fields.checks.passive.healthy.successes': '成功次數',
  'component.upstream.fields.checks.passive.healthy.successes.tooltip':
    '透過被動健康檢查觀察到的正常代理流量的成功次數。如果達到該值，上游服務目標節點將被視為健康。',
  'component.upstream.fields.checks.passive.healthy.successes.required': '請輸入成功次數',

  'component.upstream.fields.checks.passive.unhealthy.timeouts': '超時時間',
  'component.upstream.fields.checks.passive.unhealthy.timeouts.tooltip':
    '根據被動健康檢查的觀察，在代理中認為目標不健康的超時次數。',

  'component.upstream.other.none': '不選擇（僅在繫結服務時可用）',
  'component.upstream.other.pass_host-with-multiple-nodes.title': '請檢查目標節點配置',
  'component.upstream.other.pass_host-with-multiple-nodes':
    '當使用目標節點列表中的主機名或者 IP 時，請確認只有一個目標節點',
  'component.upstream.other.health-check.passive-only':
    '啟用被動健康檢查時，需要同時啟用主動健康檢查。',
  'component.upstream.other.health-check.invalid': '請檢查健康檢查配置',
};
