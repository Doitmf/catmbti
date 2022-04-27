import React from 'react'
import { Button } from 'react-bootstrap';
const { KaKao } = window


const KaKaoShareButton = ({data}) => {
  const url = "https://zingy-vacherin-239277.netlify.app/"
  const resultUrl = window.location.href
  console.log('url', url, resultUrl)
  React.useEffect(() => {
    KaKao.cleanup()
    KaKao.init("f8e3379f331ddfe1857cc4ac9bab1874")
    console.log(KaKao.isInitialized)
  }, [])
  const shareKakao = () => {
    KaKao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: '예비집사 판별기 결과',
        description: `예비 집사님이 고양이를 키운다면 가장 잘맞는 고양이는 ${data.name}입니다.`,
        imageUrl: url + data.image,
        link: {
          mobileWebUrl: resultUrl,
          webUrl: resultUrl
        },
      },
      buttons:[
        {
          title:'나도 테스트하러 가기',
          link: {
            mobileWebUrl: url,
            webUrl: url
          }
        }
      ]
    })
  }
  return(
    <Button onClick={shareKakao}>카카오톡 공유하기</Button>
  )
}
export default KaKaoShareButton;