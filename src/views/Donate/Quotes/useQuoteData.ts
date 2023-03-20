import { useMemo } from 'react';

import Person00Image from 'assets/home/quotes-person-00.png'
import Person01Image from 'assets/home/quotes-person-01.png'
import Person02Image from 'assets/home/quotes-person-02.png'
import Person03Image from 'assets/home/quotes-person-03.png'

interface QuoteData {
  key: string,
  image: any
  name: string
  text: string
}

function useIconedData () {
  const data = useMemo(() => {
    const data: QuoteData[] = []

    data.push({
      key: 'item-00-john',
      image: Person00Image,
      name: 'John Smith',
      text: 'Lorem ipsum dolor sit amet. In deleniti nisi rem commodi quasi et ipsam libero ut expedita cupiditate.'
    })

    data.push({
      key: 'item-01-mary',
      image: Person01Image,
      name: 'Mary Smith',
      text: 'Lorem ipsum dolor sit amet. In deleniti nisi rem commodi quasi et ipsam libero ut expedita cupiditate.'
    })

    data.push({
      key: 'item-02-kate',
      image: Person03Image,
      name: 'Kate Smith',
      text: 'Lorem ipsum dolor sit amet. In deleniti nisi rem commodi quasi et ipsam libero ut expedita cupiditate.'
    })

    data.push({
      key: 'item-03-robert',
      image: Person02Image,
      name: 'Robert Smith',
      text: 'Lorem ipsum dolor sit amet. In deleniti nisi rem commodi quasi et ipsam libero ut expedita cupiditate.'
    })

    data.push({
      key: 'item-04-john',
      image: Person00Image,
      name: 'John Smith',
      text: 'Lorem ipsum dolor sit amet. In deleniti nisi rem commodi quasi et ipsam libero ut expedita cupiditate.'
    })

    data.push({
      key: 'item-05-mary',
      image: Person01Image,
      name: 'Mary Smith',
      text: 'Lorem ipsum dolor sit amet. In deleniti nisi rem commodi quasi et ipsam libero ut expedita cupiditate.'
    })

    data.push({
      key: 'item-06-kate',
      image: Person03Image,
      name: 'Kate Smith',
      text: 'Lorem ipsum dolor sit amet. In deleniti nisi rem commodi quasi et ipsam libero ut expedita cupiditate.'
    })

    data.push({
      key: 'item-07-robert',
      image: Person02Image,
      name: 'Robert Smith',
      text: 'Lorem ipsum dolor sit amet. In deleniti nisi rem commodi quasi et ipsam libero ut expedita cupiditate.'
    })

    return data
  }, [])


  return {
    data
  }
}

export default useIconedData
