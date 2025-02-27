
import Component, { PageEl } from '@/frontend/components/qecomps/Component'
import Window from '@/frontend/components/qecomps/Window';
import type { GetServerSideProps, GetServerSidePropsContext } from 'next';

export default p => Component(p, Page);

const Page: PageEl = (props, refresh, getProps, onConnected, dies, z) => {


  return <div style={{ direction: z.lang.dir, padding: 10 }}>


    <Window title="تگ های سفارشی">
      <div style={{
        width: 300, height: 200, backgroundColor: "pink",

        display: "flex", //horizontal
        justifyContent:"flex-start", //main-axis
        alignItems:"flex-start"  //cross axis
      }}>
        <div style={{backgroundColor: "green" }}>OOOO</div>
        <div style={{ backgroundColor: "red" }}>OOOO</div>
        <div style={{ backgroundColor: "blue" }}>OOOO</div>
      </div>

    </Window>

  </div>
}

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {

  (global.Startup != "OK") ? (await (await import('@/startup.ts')).Starter()) : null

  var session = await global.SSRVerify(context)
  var { uid, name, image, imageprop, lang, cchar,
    unit, workspace, servid, servsecret,
    usedquota, quota, quotaunit, status, regdate, expid,
    role, path, devmod, userip, pageid } = session;


  let keys = ["region", "dir", "ff", "ffb", "support", "code", "textw", "txtmt", "yesterday", "tomorrow"]
  let nlangs = {}
  for (let l of Object.keys(global.langs[lang])) {
    if (keys.includes(l))
      nlangs[l] = global.langs[lang][l]
  }

  let obj = await Prosper({
    props: {
      value: { v: "hiiii" },
      query: context.query,
      nlangs,
      path,
      session,
      title: "test title",
      description: "test description",
      pageid,
    },
  }, context)


  return obj

}


