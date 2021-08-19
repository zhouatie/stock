import axios from 'axios';
import querystring from 'querystring';
import lodash from 'lodash'
const config = {
  params: {
    question: '人气排行前100',
    perpage: 100,
    page: 1,
    secondary_intent: '',
    log_info: { input_type: 'typewrite' },
    source: 'Ths_iwencai_Xuangu',
    version: '2.0',
    query_area: '',
    block_list: '',
    add_info: {
      urp: { scene: 1, company: 1, business: 1 },
      contentType: 'json',
      searchInfo: true,
    },
  },
  url: 'http://www.iwencai.com/unifiedwap/unified-wap/v2/result/get-robot-data',
};

export default function handler(req, res) {
  const hexinV = req.cookies.v;
  axios
    .post(config.url, querystring.stringify(config.params), {
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'hexin-v': hexinV,
      },
    })
    .then((response) => {
      const list = lodash.get(
        response,
        'data.data.answer[0].txt[0].content.components[0].data.datas',
        []
      );
      // 人气排行前100 && 涨幅正数 && 主板
      const positiveNumberList = list
        .filter((o) => !o['最新涨跌幅'].startsWith('-'))
        .filter((o) => !o.code.startsWith('3'));
      const neededStocksLists = positiveNumberList
        .map((o) => {
          return {
            code: o.code,
            name: o['股票简称'],
            increase: o['最新涨跌幅'],
            price: o['最新价'],
          };
        })
        .sort((a, b) => b.increase - a.increase);
      res.status(200).send(neededStocksLists);
    }).catch(e => {
      console.log(e, '-------------------------')
    });
}
