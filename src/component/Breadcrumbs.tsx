import { Breadcrumb } from 'antd'
import { useLocation, Link } from 'react-router-dom'
import { capitalizeFirstLetter } from '~/serivce'

export const Breadcrumbs = () => {
  const location = useLocation()
  const pathSnippets = location.pathname.split('/').filter((i) => i)

  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`
    const label = capitalizeFirstLetter(`${pathSnippets.slice(0, index + 1)}`)
    return {
      key: url,
      title: label
    }
  })

  const breadcrumbItems = [
    {
      title: <Link to='/'>Home</Link>,
      key: 'home'
    }
  ]

  return <Breadcrumb className='ml-4 mt-4' items={[...breadcrumbItems, ...extraBreadcrumbItems]} />
}
