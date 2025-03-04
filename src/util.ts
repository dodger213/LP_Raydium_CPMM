import { CREATE_CPMM_POOL_PROGRAM, DEV_CREATE_CPMM_POOL_PROGRAM } from '@raydium-io/raydium-sdk-v2'

const VALID_PROGRAM_ID = new Set([CREATE_CPMM_POOL_PROGRAM.toBase58(), DEV_CREATE_CPMM_POOL_PROGRAM.toBase58()])

export const isValidCpmm = (id: string) => VALID_PROGRAM_ID.has(id)

export const printSimulateInfo = () => {
  console.log(
    'you can paste simulate tx string here: https://explorer.solana.com/tx/inspector and click simulate to check transaction status'
  )
  console.log(
    'if tx simulate successful but did not went through successfully after running execute(xxx), usually means your txs were expired, try set up higher priority fees'
  )
  console.log('strongly suggest use paid rpcs would get you better performance')
}
