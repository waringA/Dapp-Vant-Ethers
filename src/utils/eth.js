import { ethers } from "ethers";
import store from "../store";

let provider, signer, accounts, address, balance
let ContracteAddress = ''
let ContracteAbi = ''
const eth = {
    async linkWallet() {
        provider = await new ethers.providers.Web3Provider(window.ethereum)
        signer = await provider.getSigner()
        accounts = await provider.send("eth_requestAccounts", []);
        address = accounts[0]
        balance = await provider.getBalance(address)
        balance = parseFloat(ethers.utils.formatEther(balance._hex)).toFixed(4)
        store.commit('ADDRESS', address)
        store.commit('BALANCE', balance)

    },
    async getBalance(provider, address) {
        balance = await provider.getBalance(address);
        store.commit('BALANCE', balance)
    },
    fn() {
        ethereum.on("accountsChanged", function (accounts) {
            console.log(accounts[0]);//一旦切换账号这里就会执行
        })
    }
}

export default eth