export function useBalances(
    provider,
    accounts
  ) {
    const [balances, setBalances] = useState(0);
    useEffect(() => {
      if (provider && accounts?.length) {
        let stale = false
  
        void Promise.all(accounts.map((account) => provider.getBalance(account))).then((balances) => {
          if (!stale) {
            setBalances(balances)
          }
        })
  
        return () => {
          stale = true
          setBalances(undefined)
        }
      }
    }, [provider, accounts])
  
    return balances
  }