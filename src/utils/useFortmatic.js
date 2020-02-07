import { useState, useEffect, useRef, useLayoutEffect } from 'preact/hooks'
import Web3 from 'web3'
import Fortmatic from 'fortmatic'

const usePromise = () => {
  const ref = []
  const container = useRef(ref)

  ref[0] = new Promise((resolve, reject) => {
    ref[1] = resolve
    ref[2] = reject
  })

  return container.current
}

const useFortmatic = apiKey => {
  const [accounts, setAccounts] = useState([])
  const [web3Ready, setWeb3Ready] = useState({})
  const [web3IsInitialized, setWeb3IsInitialized] = useState(false)

  const signIn = async () => {
    console.log('----------')
    console.log('web3Ready', web3Ready)
    console.log('^^^^^^^^^^')
    const { web3 } = web3Ready
    console.log('----------')
    console.log('web3', web3)
    console.log('^^^^^^^^^^')
    // Get the current user account addresses.
    // Auth if needed.
    // signIn returns a promise that should wait for signIn
    // to complete before it resolves.
    return web3.eth
      .getAccounts()
      .then(newAccounts => {
        console.log('----------')
        console.log('newAccounts', newAccounts)
        console.log('^^^^^^^^^^')
        if (newAccounts[0] !== accounts[0]) setAccounts(newAccounts)
        return newAccounts
      })
      .catch(() => {
        const newAccounts = []
        setAccounts(newAccounts)
        return newAccounts
      })
  }

  const signOut = async () => {
    const { fm } = web3Ready
    // signOut returns a promise that will wait
    // until signout is complete to resolve.
    await fm.user.logout()
    setAccounts([])
  }

  const isSignedIn = () => accounts && accounts.length > 0

  // Fire only once after components mounts.
  useEffect(() => {
    const fm = new Fortmatic(apiKey)
    const web3 = new Web3(fm.getProvider())
    console.log('----------')
    console.log('fm', fm)
    console.log('^^^^^^^^^^')
    // This needs to run before we update state
    // if we want to enable users to stay signed
    // in between page reloads.
    setWeb3Ready({ fm, web3 })
    setWeb3IsInitialized(true)
  }, [apiKey])

  return {
    accounts,
    signOut,
    signIn,
    isSignedIn,
    web3IsInitialized
  }
}

export default useFortmatic