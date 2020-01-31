import { useState, useEffect, useCallback } from 'preact/hooks'
import Web3 from 'web3'
import Fortmatic from 'fortmatic'
import { usePromise } from './usePromise'

const useFortmatic = apiKey => {
  const [accounts, setAccounts] = useState([])
  const [web3Ready, setWeb3Ready] = usePromise()
  const [web3IsInitialized, setWeb3IsInitialized] = useState(false)

  const signIn = useCallback(async () => {
    const { web3 } = await web3Ready
    // Get the current user account addresses.
    // Auth if needed.
    // signIn returns a promise that should wait for signIn
    // to complete before it resolves.
    return web3.eth
      .getAccounts()
      .then(newAccounts => {
        if (newAccounts[0] !== accounts[0]) setAccounts(newAccounts)
        return newAccounts
      })
      .catch(() => {
        const newAccounts = []
        setAccounts(newAccounts)
        return newAccounts
      })
  }, [web3Ready, accounts])

  const signOut = async () => {
    const { fm } = await web3Ready
    // signOut returns a promise that will wait
    // until signout is complete to resolve.
    await fm.user.logout()
    setAccounts([])
  }

  const isSignedIn = accounts => accounts.length > 0

  // Fire only once after components mounts.
  useEffect(() => {
    const initializeWeb3 = async () => {
      const fm = new Fortmatic(apiKey)
      const web3 = new Web3(fm.getProvider());
      // This needs to run before we update state
      // if we want to enable users to stay signed
      // in between page reloads.
      (await fm.user.isLoggedIn()) && signIn()
      setWeb3Ready({ fm, web3 })
      setWeb3IsInitialized(true)
    }

    initializeWeb3()
  }, [apiKey, setWeb3Ready, signIn])

  return {
    accounts,
    signOut,
    signIn,
    isSignedIn,
    web3Ready,
    web3IsInitialized
  }
}

export default useFortmatic