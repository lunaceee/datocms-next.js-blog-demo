import Link from 'next/link'
import { useRouter } from "next/router"

const LocalLinks = () => {
  const router = useRouter()
  const { locale, asPath } = router

  return (
    <ul className="flex gap-2 m-2 justify-end font-bold px-4">
       <li className={ locale === "en-US" ? "underline hover:text-blue-500" : "hover:text-blue-500" }>
        <Link href={"/en-US" + asPath} locale="en-US">
          <a>EN</a>
        </Link></li>
      <li className={ locale === "zh-TW" ? "underline hover:text-blue-500" : "hover:text-blue-500" }>
        <Link href={"/zh-TW" + asPath} locale="zh-TW">
          <a>中文</a>
        </Link>
      </li>
      <li className={ locale === "es-ES" ? "underline hover:text-blue-500" : "hover:text-blue-500" }>
        <Link href={"/es-ES" + asPath} locale="es-ES">
          <a>ES</a>
        </Link></li>
    </ul>
  )
}

export default LocalLinks