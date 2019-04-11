import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'
import axios from 'axios'
import {createSong} from 'common/js/song'
export function getSingerList() {
  const url = '/singer/cgi-bin/musicu.fcg'
  const data = Object.assign({}, commonParams, {
    g_tk: 1186386479,
    loginUin: 451642801,
    hostUin: 0,
    format: 'json',
    inCharset: 'utf8',
    outCharset: 'utf-8',
    notice: 0,
    platform: 'yqq.json',
    needNewCode: 0,
    data: JSON.stringify({'comm': {'ct': 24, 'cv': 0}, 'singerList': {'module': 'Music.SingerListServer', 'method': 'get_singer_list', 'param': {'area': -100, 'sex': -100, 'genre': -100, 'index': -100, 'sin': 0, 'cur_page': 1}}})
  })
  // return jsonp(url, data, options)
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getSongvKey(songmid) {
  const url = '/singer/cgi-bin/musicu.fcg'
  const data = Object.assign({}, commonParams, {
    g_tk: 1186386479,
    loginUin: 451642801,
    hostUin: 0,
    format: 'json',
    inCharset: 'utf8',
    outCharset: 'utf-8',
    notice: 0,
    platform: 'yqq.json',
    songmid: songmid,
    filename: `C400${songmid}.m4a`,
    needNewCode: 0,
    data: JSON.stringify({'req': {'module': 'CDN.SrfCdnDispatchServer', 'method': 'GetCdnDispatch', 'param': {'guid': '4361134842', 'calltype': 0, 'userip': ''}}, 'req_0': {'module': 'vkey.GetVkeyServer', 'method': 'CgiGetVkey', 'param': {'guid': '4361134842', 'songmid': [songmid], 'songtype': [0], 'uin': '827864735', 'loginflag': 1, 'platform': '20'}}, 'comm': {'uin': 827864735, 'format': 'json', 'ct': 24, 'cv': 0}})
  })
  // return jsonp(url, data, options)
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getSingerDetail(singerId) {
  const url = '/api/v8/fcg-bin/fcg_v8_singer_track_cp.fcg'
  const data = Object.assign({}, commonParams, {
    g_tk: 1186386479,
    loginUin: 451642801,
    hostUin: 0,
    format: 'json',
    inCharset: 'utf8',
    outCharset: 'utf-8',
    notice: 0,
    platform: 'yqq',
    needNewCode: 0,
    ct: 24,
    singermid: singerId,
    order: 'listen',
    begin: 0,
    num: 100
  })
  return jsonp(url, data, options)
}
