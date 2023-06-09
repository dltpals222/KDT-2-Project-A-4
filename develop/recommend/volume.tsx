import { type } from 'os'
import samsung from '../sourceData/financeDB(samsung).json'

type CompanyDateType =  {
  day : (Date | string)[],
  volume : number[],
}

const samsungDate : CompanyDateType = {
  day : samsung.samsung.map((value) => value.day),
  volume : samsung.samsung.map((value) => value.volume)
}


console.log(samsungDate)