import { FC } from 'react'

import { Welcome } from '~/component/Welcome'

const Home: FC = () => {
  return (
    <div className='flex-center h-[60vh]'>
      <Welcome />
    </div>
  )
}

export default Home
