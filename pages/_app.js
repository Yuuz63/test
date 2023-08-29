import 'styles/globals.css'
import Layout from 'components/layout'

//Font Awesomeの設定
import '@fortawesome/fontawesome-svg-core/styles.css'
import {config} from '@fortawesome/fontawesome-svg-core'
config.autoAddCss = false

function MyApp({ Component, PageProps }) {
  return (
    <Layout>
      <Component {...PageProps} />
    </Layout>
  )
}

export default MyApp