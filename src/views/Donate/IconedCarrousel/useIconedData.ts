import { useMemo } from 'react';

import IconHorse from 'assets/donate/iconed-carrousel-horse.svg'

interface IconedData {
  key: string,
  icon: any,
  text: string
  orangeBackground?: boolean
}

function useIconedData () {
  const data = useMemo(() => {
    const data: IconedData[] = []

    data.push({
      key: 'item-00-horse',
      icon: IconHorse,
      text: 'Curae sem primis hac fames mauris accumsan lorem amet.',
      orangeBackground: true
    })

    data.push({
      key: 'item-01-medice',
      icon: IconHorse,
      text: 'Per non velit non suspendisse bibendum per elit.'
    })

    data.push({
      key: 'item-02-soup',
      icon: IconHorse,
      text: 'Placerat lectus at phasellus eget metus justo sagittis at.'
    })
    
    data.push({
      key: 'item-03-house',
      icon: IconHorse,
      text: 'Maecenas gravida vel ultricies maecenas, fermentum vel.'
    })

    data.push({
      key: 'item-04-horse',
      icon: IconHorse,
      text: 'Curae sem primis hac fames mauris accumsan lorem amet.'
    })

    data.push({
      key: 'item-05-medice',
      icon: IconHorse,
      text: 'Per non velit non suspendisse bibendum per elit.'
    })

    data.push({
      key: 'item-06-soup',
      icon: IconHorse,
      text: 'Placerat lectus at phasellus eget metus justo sagittis at.'
    })

    data.push({
      key: 'item-07-house',
      icon: IconHorse,
      text: 'Maecenas gravida vel ultricies maecenas, fermentum vel.'
    })

    return data
  }, [])


  return {
    data
  }
}

export default useIconedData
