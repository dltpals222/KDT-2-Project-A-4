import samsung from '../sourceData/financeDB(samsung).json'
import LG from '../sourceData/financeDB(LG).json'
import hanhwa from '../sourceData/financeDB(hanhwa).json'
import hyundai from '../sourceData/financeDB(hyundai).json'
import NC from '../sourceData/financeDB(NC).json'
import * as React from 'react'

type CompanyDateType =  {
  day : (Date | string)[],
  volume : number[],
}

type CompanySamsungType = {
  no : number,
  open : number,
  high : number,
  low : number,
  close : number,
  volume : number,
  day : string,
}

