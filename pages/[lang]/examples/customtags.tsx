
import Component, { PageEl } from '@/frontend/components/qecomps/Component'
import Window from '@/frontend/components/qecomps/Window';
import type { GetServerSideProps, GetServerSidePropsContext } from 'next';

export default p => Component(p, Page);

const Page: PageEl = (props, refresh, getProps, onConnected, dies, z) => {


  return <div style={{ direction: z.lang.dir, padding: 10 }}>


    <Window title="تگ های سفارشی">

      {/* <div style={{width:"100%", height:300, backgroundColor:"pink",
        display:"flex",
        flexDirection:"row",
        
        alignItems:"stretch", //cross-axis (stretch, flex-start, flex-end, center)
        justifyContent:"space-evenly" //main-axis (flex-start, flex-end, center, space-between, space-around, space-evenly)

      }}>
        <div style={{backgroundColor:"red"}}>OOOOO</div>
        <div style={{backgroundColor:"green"}}>OOOOO</div>
        <div style={{backgroundColor:"blue"}}>OOOOO</div>
      </div> */}


        {/* FLEX فلکس و چیدمان
        B-NUM دکمه
        SP-NUM (SP-X) فاصله افقی
        BR-NUM (BR-X) فاصله عمودی
        F-NUM فونت سایز */}

      <f-cc>
        <f-5>hiii</f-5>
        <sp-x /><sp-xx /><sp-xxx />
        <f-40>bye</f-40>
      </f-cc>

      <c-cc>
        hiiii
        <br-1 />
        <br-x />
        <br-2 />
        <br-xx />
        <br-xxx />
        <br-xxxx />
        byeee
      </c-cc>

      <w-sc style={{ padding: 5, gap: 5 }}>
        <b-300 style={{ backgroundColor: "#91B193" }}>hiiii</b-300>
        <b-300 style={{ backgroundColor: "#91B193" }}>hiiii</b-300>
        <b-300 style={{ backgroundColor: "#91B193" }}>hiiii</b-300>
        <b-300 style={{ backgroundColor: "#91B193" }}>hiiii</b-300>
      </w-sc>

      <w-xc style={{
        width: "100%", backgroundColor: "pink",
        rowGap: 30, columnGap: 10, padding: 10,
      }}>
        <f-cc style={{ height: 100, width: 100, minWidth: 100, backgroundColor: "red", borderRadius: 50 }}>OOOOO</f-cc>
        <f-cc style={{ height: 100, width: 100, minWidth: 100, backgroundColor: "red", borderRadius: 50 }}>OOOOO</f-cc>
        <f-cc style={{ height: 100, width: 100, minWidth: 100, backgroundColor: "red", borderRadius: 50 }}>OOOOO</f-cc>
        <f-cc style={{ height: 100, width: 100, minWidth: 100, backgroundColor: "red", borderRadius: 50 }}>OOOOO</f-cc>
        <f-cc style={{ height: 100, width: 100, minWidth: 100, backgroundColor: "red", borderRadius: 50 }}>OOOOO</f-cc>
        <f-cc style={{ height: 100, width: 100, minWidth: 100, backgroundColor: "red", borderRadius: 50 }}>OOOOO</f-cc>
        <f-cc style={{ height: 100, width: 100, minWidth: 100, backgroundColor: "red", borderRadius: 50 }}>OOOOO</f-cc>
      </w-xc>

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


