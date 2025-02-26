
import Component, { PageEl } from '@/frontend/components/qecomps/Component'
import Window from '@/frontend/components/qecomps/Window';
import { useEffect } from 'react';
import type { GetServerSideProps, GetServerSidePropsContext } from 'next';
import Router from 'next/router'
import Copy from '@/frontend/components/qecomps/Copy';
import FaDigits, { EnDigits } from '@/frontend/components/qecomps/FaDigits';
import TextBox from '@/frontend/components/qecomps/TextBox';
import AbbreviateDate from '@/frontend/components/qecomps/AbbreviateDate';


export default p => Component(p, Page);

const Page: PageEl = (props, refresh, getProps, onConnected, dies, z) => {


  return <div style={{ direction: z.lang.dir, padding: 10 }}>

    <Window title="کوتاه کننده تاریخ و زمان">
      <div style={{ padding: 10 }}>

        <w-x style={{ columnGap: 50, rowGap: 10 }}>
          <f-12>اکنون: {AbbreviateDate(new Date(), z)}</f-12>


          <f-12>اکنون با ثانیه:
            <sp-3 />
            <span style={{ color: "#157B1C" }}>
              {AbbreviateDate(new Date(), z, { includsec: true })}
            </span>
          </f-12>


          <f-12>اکنون ۲۴ ساعت با ثانیه:
            <sp-3 />
            <span style={{ color: "#157B1C" }}>
              {AbbreviateDate(new Date(), z, { includsec: true, use24H: true })}
            </span>
          </f-12>

          <f-12> ۹۰ روز پیش:
            <sp-3 />
            <span style={{ color: "#157B1C" }}>
              {AbbreviateDate(new Date(new Date().getTime() - 86400000 * 90), z)}
            </span>
          </f-12>


          <br-x />
          <f-12> ۲۰ روز پیش:
            <sp-3 />
            <span style={{ color: "#157B1C" }}>
              {AbbreviateDate(new Date(new Date().getTime() - 86400000 * 20), z,)}
            </span>
          </f-12>


          <br-x />
          <f-12> ۱ روز پیش:
            <sp-3 />
            <span style={{ color: "#157B1C" }}>
              {AbbreviateDate(new Date(new Date().getTime() - 86400000 * 1), z,)}
            </span>
          </f-12>


          <f-12> ۱ روز بعد:
            <sp-3 />
            <span style={{ color: "#157B1C" }}>
              {AbbreviateDate(new Date(new Date().getTime() + 86400000 * 1), z,)}
            </span>
          </f-12>


          <f-12> ۱ روز بعد:
            <sp-3 />
            <span style={{ color: "#157B1C" }}>
              {AbbreviateDate(new Date(new Date().getTime() + 86400000 * 1), z,)}
            </span>
          </f-12>
        </w-x>
        
        
        <br-x/>
        <br-x/>
        <br-x/>
        <br-x/>

        <w-x style={{ direction: "ltr", columnGap: 50, rowGap: 10 }}>
          <f-12> Now USA Format:
            <sp-3 />
            <span style={{ color: "#157B1C", }}>
              {AbbreviateDate(new Date(), z, { region: "en-US" })}
            </span>
          </f-12>


          <f-12> Now USA Format + Seconds:
            <sp-3 />
            <span style={{ color: "#157B1C", }}>
              {AbbreviateDate(new Date(), z, { includsec: true, region: "en-US" })}
            </span>
          </f-12>

          <f-12> 10 Days ago USA Format + Seconds:
            <sp-3 />
            <span style={{ color: "#157B1C", }}>
              {AbbreviateDate(new Date(new Date().getTime() - 86400000 * 10), z, { includsec: true, region: "en-US" })}
            </span>
          </f-12>

          <f-12> 90 Days ago USA Format + Seconds:
            <sp-3 />
            <span style={{ color: "#157B1C", }}>
              {AbbreviateDate(new Date(new Date().getTime() - 86400000 * 90), z, { includsec: true, region: "en-US" })}
            </span>
          </f-12>



          <f-12> Now British Format + Seconds:
            <sp-3 />
            <span style={{ color: "#157B1C", }}>
              {AbbreviateDate(new Date(), z, { includsec: true, region: "en-GB" })}
            </span>
          </f-12>

          <f-12> 10 Days ago British Format + Seconds:
            <sp-3 />
            <span style={{ color: "#157B1C", }}>
              {AbbreviateDate(new Date(new Date().getTime() - 86400000 * 10), z, { includsec: true, region: "en-GB" })}
            </span>
          </f-12>

          <f-12> 90 Days ago British Format + Seconds:
            <sp-3 />
            <span style={{ color: "#157B1C", }}>
              {AbbreviateDate(new Date(new Date().getTime() - 86400000 * 90), z, { includsec: true, region: "en-GB" })}
            </span>
          </f-12>




        </w-x>

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


