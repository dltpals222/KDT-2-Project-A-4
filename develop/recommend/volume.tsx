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

class companyDayVolume {
  private company : {samsung : CompanySamsungType[]};
  constructor(company : {samsung : CompanySamsungType[]}){
    this.company = company
  }

  get dayVolume() : CompanyDateType {
    return {
      day : this.company.samsung.map((value) => new Date(value.day)),
      volume : this.company.samsung.map((value)=>value.volume)
    }
  }
} 

const samsungDate = new companyDayVolume(samsung).dayVolume
const hanhwaDate = new companyDayVolume(hanhwa).dayVolume
const hyundaiDate = new companyDayVolume(hyundai).dayVolume
const NCDate = new companyDayVolume(NC).dayVolume
const LGDate = new companyDayVolume(LG).dayVolume


// console.log(new Date(samsung.samsung[0].day))
console.log(new Date(samsungDate.day[0]).setFullYear)
