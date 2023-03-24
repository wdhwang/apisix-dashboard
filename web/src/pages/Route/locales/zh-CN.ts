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
  // global
  'page.route.parameterPosition': '引數位置',
  'page.route.httpRequestHeader': 'HTTP 請求頭',
  'page.route.requestParameter': '請求引數',
  'page.route.postRequestParameter': 'POST 請求引數',
  'page.route.builtinParameter': '內建引數',
  'page.route.parameterName': '引數名稱',
  'page.route.operationalCharacter': '運算子',
  'page.route.equal': '等於（==）',
  'page.route.unequal': '不等於（~=）',
  'page.route.greaterThan': '大於（>）',
  'page.route.lessThan': '小於（<）',
  'page.route.regexMatch': '正則匹配（～～）',
  'page.route.caseInsensitiveRegexMatch': '不區分大小寫的正則匹配（~*）',
  'page.route.in': 'IN',
  'page.route.has': 'HAS',
  'page.route.reverse': '非(!)',
  'page.route.rule': '規則',
  'page.route.host': '域名',
  'page.route.path': '路徑',
  'page.route.remoteAddrs': '客戶端地址',
  'page.route.value': '引數值',
  'page.route.httpHeaderName': 'HTTP 請求頭名稱',
  'page.route.status': '狀態',
  'page.route.groupName': '分組名稱',
  'page.route.offline': '下線',
  'page.route.publish': '釋出',
  'page.route.published': '已釋出',
  'page.route.unpublished': '未釋出',
  'page.route.onlineDebug': '線上除錯',
  'page.route.pluginTemplateConfig': '外掛模版配置',
  'page.route.service': '繫結服務',
  'page.route.instructions': '說明',
  'page.route.import': '匯入',
  'page.route.createRoute': '建立路由',
  'page.route.editRoute': '編輯路由',
  'page.route.batchDeletion': '批次刪除路由',
  'page.route.unSelect': '取消選擇',
  'page.route.item': '項',
  'page.route.chosen': '已選擇',

  // button
  'page.route.button.returnList': '返回路由列表',
  'page.route.button.send': '傳送請求',

  // input
  'page.route.input.placeholder.parameterNameHttpHeader': '請求頭名稱，例如：HOST',
  'page.route.input.placeholder.parameterNameRequestParameter': '引數名稱，例如：id',
  'page.route.input.placeholder.redirectCustom': '例如：/foo/index.html',
  'page.route.input.placeholder.requestUrl': '請輸入合法的請求地址',
  'page.route.input.placeholder.paramKey': '引數名稱',
  'page.route.input.placeholder.paramType': '引數型別',
  'page.route.input.placeholder.paramValue': '引數值',
  // form
  'page.route.form.itemRulesRequiredMessage.parameterName': '僅支援字母和數字，且只能以字母開頭',
  'page.route.form.itemRulesPatternMessage.apiNameRule': '最大長度應僅為 100',
  'page.route.form.itemLabel.httpMethod': 'HTTP 方法',
  'page.route.form.itemLabel.scheme': '協議',
  'page.route.form.itemLabel.priority': '優先順序',
  'page.route.form.itemLabel.redirect': '重定向',
  'page.route.form.itemLabel.redirectCustom': '自定義重定向',
  'page.route.form.itemLabel.URIRewriteType': '路徑改寫',
  'page.route.form.itemLabel.hostRewriteType': '域名改寫',
  'page.route.form.itemLabel.methodRewrite': 'HTTP 方法改寫',
  'page.route.form.itemLabel.headerRewrite': '請求頭改寫',
  'page.route.form.itemLabel.redirectURI': '重定向路徑',
  'page.route.form.itemExtraMessage.domain': '路由匹配的域名列表。支援泛域名，如：*.test.com',
  'page.route.form.itemRulesPatternMessage.domain':
    '僅支援字母、數字、-、_和 *，但 * 需要在開頭位置。',
  'page.route.form.itemExtraMessage1.path':
    'HTTP 請求路徑，如 /foo/index.html，支援請求路徑字首 /foo/*。/* 代表所有路徑',
  'page.route.form.itemExtraMessage1.remoteAddrs':
    '客戶端與伺服器握手時 IP，即客戶端 IP，例如：192.168.1.101，192.168.1.0/24，::1，fe80::1，fe80::1/64',
  'page.route.form.itemRulesPatternMessage.remoteAddrs':
    '請輸入合法的 IP 地址，例如：192.168.1.101，192.168.1.0/24，::1，fe80::1，fe80::1/64',
  'page.route.form.itemLabel.username': '使用者名稱',
  'page.route.form.itemLabel.password': '密 碼',
  'page.route.form.itemLabel.token': 'Token',
  'page.route.form.itemLabel.apikey': 'Apikey',

  // select
  'page.route.select.option.enableHttps': '啟用 HTTPS',
  'page.route.select.option.configCustom': '自定義',
  'page.route.select.option.forbidden': '禁用',
  'page.route.select.option.redirect301': '301（永久重定向）',
  'page.route.select.option.redirect302': '302（臨時重定向）',
  'page.route.select.option.inputManually': '手動填寫',
  'page.route.select.option.methodRewriteNone': '不改寫',

  // steps
  'page.route.steps.stepTitle.defineApiRequest': '設定路由資訊',
  'page.route.steps.stepTitle.defineApiBackendServe': '設定上游服務',

  // panelSection
  'page.route.panelSection.title.nameDescription': '基本資訊',
  'page.route.panelSection.title.httpOverrideRequestHeader': 'HTTP 請求頭改寫',
  'page.route.panelSection.title.requestOverride': '請求改寫',
  'page.route.panelSection.title.requestConfigBasicDefine': '匹配條件',
  'page.route.panelSection.title.advancedMatchRule': '高階匹配條件',
  'page.route.PanelSection.title.defineRequestParams': '請求引數定義',
  'page.route.PanelSection.title.responseResult': '請求響應結果',

  'page.route.httpAction': '行為',
  'page.route.httpOverrideOrCreate': '重寫/建立',

  'page.route.form.itemLabel.domainNameOrIp': '域名/IP',
  'page.route.form.itemExtraMessage.domainNameOrIp': '使用域名時，預設解析本地：/etc/resolv.conf',
  'page.route.portNumber': '埠',
  'page.route.weight': '權重',

  'page.route.radio.static': '靜態改寫',
  'page.route.radio.regex': '正則改寫',
  // Need a better translation
  'page.route.form.itemLabel.regex': '匹配正則表示式',
  'page.route.form.itemLabel.template': '轉發路徑模版',
  'page.route.form.itemHelp.status': '路由建立後是否可以使用， 預設值為 false',
  'page.route.radio.staySame': '保持原樣',
  'page.route.input.placeholder.newPath': '例如：/foo/bar/index.html',
  'page.route.form.itemLabel.newPath': '新路徑',
  'page.route.form.itemLabel.newHost': '新域名',
  'page.route.popconfirm.title.offline': '確定下線該路由嗎？',
  'page.route.debug.showResultAfterSendRequest': '傳送請求後在此檢視響應結果',
  'page.route.TabPane.queryParams': '查詢引數',
  'page.route.TabPane.bodyParams': '請求體引數',
  'page.route.TabPane.headerParams': '請求頭引數',
  'page.route.TabPane.authentication': '認證',
  'page.route.TabPane.response': '響應結果',
  'page.route.TabPane.header': '響應請求頭引數',
  'page.route.debugWithoutAuth': '當前請求不啟用任何認證方式。',
  'page.route.button.exportOpenApi': '匯出 OpenAPI',
  'page.route.exportRoutesTips': '請選擇匯出檔案的型別',
  'page.route.button.importOpenApi': '匯入 OpenAPI',
  'page.route.button.selectFile': '請選擇上傳檔案',
  'page.route.list': '路由列表',
  'page.route.tooltip.pluginOrchOnlySupportChrome': '外掛編排僅支援 Chrome 瀏覽器。',
  'page.route.tooltip.pluginOrchWithoutProxyRewrite':
    '當步驟一中 配置了 請求改寫時，不可使用外掛編排模式。',
  'page.route.tooltip.pluginOrchWithoutRedirect':
    '當步驟一中 重定向 選擇為 啟用 HTTPS 時，不可使用外掛編排模式。',

  'page.route.tabs.normalMode': '普通模式',
  'page.route.tabs.orchestration': '編排模式',

  'page.route.list.description':
    '路由（Route）是請求的入口點，它定義了客戶端請求與服務之間的匹配規則。路由可以與服務（Service）、上游（Upstream）關聯，一個服務可對應一組路由，一個路由可以對應一個上游物件（一組後端服務節點），因此，每個匹配到路由的請求將被閘道器代理到路由繫結的上游服務中。',

  'page.route.configuration.name.rules.required.description': '請輸入路由名稱',
  'page.route.configuration.name.placeholder': '請輸入路由名稱',
  'page.route.configuration.desc.tooltip': '路由的描述資訊',
  'page.route.configuration.publish.tooltip': '用於控制路由建立後，是否立即釋出到閘道器',
  'page.route.configuration.version.placeholder': '請輸入路由版本號',
  'page.route.configuration.version.tooltip': '路由的版本號，如 V1',
  'page.route.configuration.normal-labels.tooltip': '為路由增加自定義標籤，可用於路由分組。',

  'page.route.configuration.path.rules.required.description': '請輸入有效的 HTTP 請求路徑',
  'page.route.configuration.path.placeholder': '請輸入 HTTP 請求路徑',
  'page.route.configuration.remote_addrs.placeholder': '請輸入客戶端地址',
  'page.route.configuration.host.placeholder': '請輸入 HTTP 請求域名',

  'page.route.service.none': '不繫結服務',

  'page.route.rule.create': '建立規則',
  'page.route.rule.edit': '編輯規則',

  'page.route.advanced-match.operator.sample.IN': '請輸入陣列，示例：["1", "2"]',
  'page.route.advanced-match.operator.sample.~~': '請輸入正則表示式，示例：[a-z]+',
  'page.route.fields.service_id.invalid': '請檢查路由繫結的服務',
  'page.route.fields.service_id.without-upstream': '如果不繫結服務，則必須設定上游服務（步驟 2）',
  'page.route.advanced-match.tooltip':
    '支援透過請求頭，請求引數、Cookie 進行路由匹配，可應用於灰度釋出，藍綠測試等場景。',
  'page.route.advanced-match.message': '提示',
  'page.route.advanced-match.tips.requestParameter': '請求引數：請求 URL 中的 Query 部分',
  'page.route.advanced-match.tips.postRequestParameter':
    'POST 請求引數：僅支援 POST x-www-form-urlencoded 表單',
  'page.route.advanced-match.tips.builtinParameter': '內建引數：Nginx 內部引數',

  'page.route.fields.custom.redirectOption.tooltip': '在此配置 redirect 外掛',
  'page.route.fields.service_id.tooltip': '繫結服務（Service）物件，以便複用其中的配置。',

  'page.route.fields.vars.invalid': '請檢查高階匹配條件配置',
  'page.route.fields.vars.in.invalid': '使用 IN 運算子時，請輸入陣列格式的引數值。',

  'page.route.data_loader.import': '匯入',
  'page.route.data_loader.import_panel': '匯入路由',
  'page.route.data_loader.types.openapi3': 'OpenAPI 3',
  'page.route.data_loader.types.openapi_legacy': 'OpenAPI 3 舊版',
  'page.route.data_loader.labels.loader_type': '資料載入器型別',
  'page.route.data_loader.labels.task_name': '匯入任務名稱',
  'page.route.data_loader.labels.upload': '上傳',
  'page.route.data_loader.labels.openapi3_merge_method': '合併 HTTP 方法',
  'page.route.data_loader.tips.select_type': '請選擇資料載入器',
  'page.route.data_loader.tips.input_task_name': '請輸入匯入任務名稱',
  'page.route.data_loader.tips.click_upload': '點選上傳',
  'page.route.data_loader.tips.openapi3_merge_method':
    '是否將 OpenAPI 路徑中的多個 HTTP 方法合併為單一路由。當你的路徑中多個 HTTP 方法有不同的細節配置（如 securitySchema），你可以關閉這個選項，將為不同的 HTTP 方法生成單獨的路由。',
};
