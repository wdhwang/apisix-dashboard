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
  'component.plugin.tip1': '注意：自定義外掛後（修改、新增、刪除等），需更新 schema.json。',
  'component.plugin.tip2': '如何更新？',
  'component.select.pluginTemplate': '選擇外掛模板',
  'component.step.select.pluginTemplate.select.option': '手動配置',
  'component.plugin.pluginTemplate.tip1':
    '1. 若路由已配置外掛，則外掛模板資料將與已配置的外掛資料合併。',
  'component.plugin.pluginTemplate.tip2': '2. 外掛模板相同的外掛會覆蓋掉原有的外掛。',
  'component.plugin.enable': '啟用',
  'component.plugin.disable': '編輯',
  'component.plugin.authentication': '身份驗證',
  'component.plugin.security': '安全防護',
  'component.plugin.traffic': '流量控制',
  'component.plugin.serverless': '無伺服器架構',
  'component.plugin.observability': '可觀測性',
  'component.plugin.other': '其它',
  'component.plugin.all': '所有',
  // cors
  'component.pluginForm.cors.allow_origins.tooltip':
    '允許跨域訪問的 Origin，格式如：scheme://host:port，比如: https://somehost.com:8081 。多個值使用 , 分割，allow_credential 為 false 時可以使用 * 來表示所有 Origin 均允許透過。你也可以在啟用了 allow_credential 後使用 ** 強制允許所有 Origin 都透過，但請注意這樣存在安全隱患。',
  'component.pluginForm.cors.allow_origins.extra': '例如: https://somehost.com:8081',
  'component.pluginForm.cors.allow_methods.tooltip':
    '允許跨域訪問的 Method，比如: GET，POST等。多個值使用 , 分割，allow_credential 為 false 時可以使用 * 來表示所有 Origin 均允許透過。你也可以在啟用了 allow_credential 後使用 ** 強制允許所有 Method 都透過，但請注意這樣存在安全隱患。',
  'component.pluginForm.cors.allow_headers.tooltip':
    '允許跨域訪問時請求方攜帶哪些非 CORS 規範 以外的 Header， 多個值使用 , 分割，allow_credential 為 false 時可以使用 * 來表示所有 Header 均允許透過。你也可以在啟用了 allow_credential 後使用 ** 強制允許所有 Header 都透過，但請注意這樣存在安全隱患。',
  'component.pluginForm.cors.expose_headers.tooltip':
    '允許跨域訪問時響應方攜帶哪些非 CORS 規範 以外的 Header， 多個值使用 , 分割，allow_credential 為 false 時可以使用 * 來表示允許任意 Header 。你也可以在啟用了 allow_credential 後使用 ** 強制允許任意 Header ，但請注意這樣存在安全隱患。',
  'component.pluginForm.cors.max_age.tooltip':
    '瀏覽器快取 CORS 結果的最大時間，單位為秒，在這個時間範圍內瀏覽器會複用上一次的檢查結果，-1 表示不快取。',
  'component.pluginForm.cors.allow_credential.tooltip':
    '是否允許跨域訪問的請求方攜帶憑據（如 Cookie 等）。根據 CORS 規範，如果設定該選項為 true，那麼將不能在其他選項中使用 * 。',
  'component.pluginForm.cors.allow_origins_by_metadata.tooltip':
    '透過引用外掛元資料的 allow_origins 配置允許跨域訪問的 Origin。',
  'component.pluginForm.cors.allow_origins_by_regex.tooltip':
    '使用正則表示式來匹配允許跨域訪問的 Origin, 每一個輸入框僅可以配置一個獨立的正則表示式，如".*.test.com" 可以匹配任何test.com的子域名 * 。',

  // referer-restriction
  'component.pluginForm.referer-restriction.whitelist.tooltip':
    "白名單域名列表。域名開頭可以用'*'作為萬用字元。",
  'component.pluginForm.referer-restriction.blacklist.tooltip':
    "黑名單域名列表。域名開頭可以用'*'作為萬用字元。",
  'component.pluginForm.referer-restriction.listEmpty.tooltip': '列表為空',
  'component.pluginForm.referer-restriction.bypass_missing.tooltip':
    '當 Referer 不存在或格式有誤時，是否繞過檢查。',
  'component.pluginForm.referer-restriction.message.tooltip': '在未允許訪問的情況下返回的資訊。',

  // api-breaker
  'component.pluginForm.api-breaker.break_response_code.tooltip': '不健康返回錯誤碼。',
  'component.pluginForm.api-breaker.break_response_body.tooltip': '不健康返回報文',
  'component.pluginForm.api-breaker.break_response_headers.tooltip': '不健康返回報文頭',
  'component.pluginForm.api-breaker.max_breaker_sec.tooltip': '最大熔斷持續時間。',
  'component.pluginForm.api-breaker.unhealthy.http_statuses.tooltip': '不健康時候的狀態碼。',
  'component.pluginForm.api-breaker.unhealthy.failures.tooltip':
    '觸發不健康狀態的連續錯誤請求次數。',
  'component.pluginForm.api-breaker.healthy.http_statuses.tooltip': '健康時候的狀態碼。',
  'component.pluginForm.api-breaker.healthy.successes.tooltip': '觸發健康狀態的連續正常請求次數。',

  // proxy-mirror
  'component.pluginForm.proxy-mirror.host.tooltip':
    '指定映象服務地址，例如：http://127.0.0.1:9797（地址中需要包含 schema ：http或https，不能包含 URI 部分）',
  'component.pluginForm.proxy-mirror.host.extra': '例如：http://127.0.0.1:9797',
  'component.pluginForm.proxy-mirror.host.ruletip':
    '地址中需要包含 schema ：http或https，不能包含 URI 部分',
  'component.pluginForm.proxy-mirror.path.tooltip':
    '指定映象請求的路徑。如不指定，當前路徑將被使用。',
  'component.pluginForm.proxy-mirror.path.ruletip': '請輸入正確的路徑，例如： /path',
  'component.pluginForm.proxy-mirror.sample_ratio.tooltip': '映象請求取樣率',

  // limit-conn
  'component.pluginForm.limit-conn.conn.tooltip':
    '允許的最大併發請求數。超過 conn 的限制、但是低於 conn + burst 的請求，將被延遲處理。',
  'component.pluginForm.limit-conn.burst.tooltip': '允許被延遲處理的併發請求數。',
  'component.pluginForm.limit-conn.default_conn_delay.tooltip':
    '預設的典型連線（或請求）的處理延遲時間。',
  'component.pluginForm.limit-conn.key_type.tooltip':
    '關鍵字型別，支援：var（單變數）和 var_combination（組合變數）',
  'component.pluginForm.limit-conn.key.tooltip':
    '使用者指定的限制併發級別的關鍵字，可以是客戶端 IP 或服務端 IP。例如，可以使用主機名（或伺服器區域）作為關鍵字，以便限制每個主機名的併發性。 否則，我們也可以使用客戶端地址作為關鍵字，這樣我們就可以避免單個客戶端用太多的並行連線或請求淹沒我們的服務。',
  'component.pluginForm.limit-conn.rejected_code.tooltip':
    '當請求超過 conn + burst 這個閾值時，返回的 HTTP 狀態碼。',
  'component.pluginForm.limit-conn.rejected_msg.tooltip':
    '當請求超過 conn + burst 這個閾值時，返回的響應體。',
  'component.pluginForm.limit-conn.only_use_default_delay.tooltip':
    '延遲時間的嚴格模式。 如果設定為true的話，將會嚴格按照設定的時間來進行延遲',
  'component.pluginForm.limit-conn.allow_degradation.tooltip':
    '當外掛功能臨時不可用時是否允許請求繼續。當值設定為 true 時則自動允許請求繼續，預設值是 false。',

  // limit-req
  'component.pluginForm.limit-req.rate.tooltip':
    '指定的請求速率（以秒為單位），請求速率超過 rate 但沒有超過 （rate + brust）的請求會被加上延時。',
  'component.pluginForm.limit-req.burst.tooltip':
    '請求速率超過（rate + brust）的請求會被直接拒絕。',
  'component.pluginForm.limit-req.key_type.tooltip':
    '關鍵字型別，支援：var（單變數）和 var_combination（組合變數）',
  'component.pluginForm.limit-req.key.tooltip': '用來做請求計數的依據',
  'component.pluginForm.limit-req.rejected_code.tooltip':
    '當請求超過閾值被拒絕時，返回的 HTTP 狀態碼。',
  'component.pluginForm.limit-req.rejected_msg.tooltip': '當請求超過閾值被拒絕時，返回的響應體。',
  'component.pluginForm.limit-req.nodelay.tooltip': '開啟後突發的請求不會延遲',

  'component.plugin.form': '表單',
  'component.plugin.format-codes.disable': '用於格式化 JSON 或 YAML 內容',
  'component.plugin.editor': '外掛配置',
  'component.plugin.noConfigurationRequired': '本外掛無需配置',

  // limit-count
  'component.pluginForm.limit-count.count.tooltip': '指定時間視窗內的請求數量閾值。',
  'component.pluginForm.limit-count.time_window.tooltip':
    '時間視窗的大小（以秒為單位），超過這個時間就會重置。',
  'component.pluginForm.limit-count.key_type.tooltip':
    '關鍵字型別，支援：var（單變數）和 var_combination（組合變數）',
  'component.pluginForm.limit-count.key.tooltip':
    '用來做請求計數的有效值。例如，可以使用主機名（或伺服器區域）作為關鍵字，以便限制每個主機名規定時間內的請求次數。我們也可以使用客戶端地址作為關鍵字，這樣我們就可以避免單個客戶端規定時間內多次的連線我們的服務。',
  'component.pluginForm.limit-count.rejected_code.tooltip':
    '當請求超過閾值被拒絕時，返回的 HTTP 狀態碼。',
  'component.pluginForm.limit-count.rejected_msg.tooltip': '當請求超過閾值被拒絕時，返回的響應體。',
  'component.pluginForm.limit-count.policy.tooltip':
    '用於檢索和增加限制的速率限制策略。可選的值有：local(計數器被以記憶體方式儲存在節點本地，預設選項) 和 redis(計數器儲存在 Redis 服務節點上，從而可以跨節點共享結果，通常用它來完成全侷限速)；以及redis-cluster，跟 redis 功能一樣，只是使用 redis 叢集方式。',
  'component.pluginForm.limit-count.allow_degradation.tooltip':
    '當限流外掛功能臨時不可用時（例如，Redis 超時）是否允許請求繼續。當值設定為 true 時則自動允許請求繼續',
  'component.pluginForm.limit-count.show_limit_quota_header.tooltip':
    '是否在響應頭中顯示 X-RateLimit-Limit 和 X-RateLimit-Remaining （限制的總請求數和剩餘還可以傳送的請求數）',
  'component.pluginForm.limit-count.group.tooltip':
    '配置同樣的 group 的 Route 將共享同樣的限流計數器',
  'component.pluginForm.limit-count.redis_host.tooltip':
    '當使用 redis 限速策略時，該屬性是 Redis 服務節點的地址。',
  'component.pluginForm.limit-count.redis_port.tooltip':
    '當使用 redis 限速策略時，該屬性是 Redis 服務節點的埠。',
  'component.pluginForm.limit-count.redis_password.tooltip':
    '當使用 redis 限速策略時，該屬性是 Redis 服務節點的密碼。',
  'component.pluginForm.limit-count.redis_database.tooltip':
    '當使用 redis 限速策略時，該屬性是 Redis 服務節點中使用的 database，並且只針對非 Redis 叢集模式（單例項模式或者提供單入口的 Redis 公有云服務）生效。',
  'component.pluginForm.limit-count.redis_timeout.tooltip':
    '當使用 redis 限速策略時，該屬性是 Redis 服務節點以毫秒為單位的超時時間。',
  'component.pluginForm.limit-count.redis_cluster_nodes.tooltip':
    '當使用 redis-cluster 限速策略時，該屬性是 Redis 叢集服務節點的地址列表（至少需要兩個地址）。',
  'component.pluginForm.limit-count.redis_cluster_name.tooltip':
    '當使用 redis-cluster 限速策略時，該屬性是 Redis 叢集服務節點的名稱。',
  'component.pluginForm.limit-count.atLeast2Characters.rule': '請至少輸入 2 個字元',
};
