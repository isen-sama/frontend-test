import Image from "next/image"

export default function Card(){
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                    <Image src="/assets/img/card1.jpg" layout="responsive" className="card-img-top" width={100} height={100} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Bocchi the Rock! ( ぼっち・ざ・ろっく )</h5>
                        <p className="card-text">
                            Kyuuzou Band’s new song “Now, I, From the Underground” has been chosen as the ending theme for the first part of “Theatrical Compilation Bocchi the Rock!”
                        </p>
                        <a href="https://bocchi.rocks" target="_blank" className="btn btn-primary">Visit</a>
                    </div>
                    </div>
                </div>

            <div className="col-md-4">
                    <div className="card">
                    <Image src="/assets/img/card2.jpg" layout="responsive" className="card-img-top" width={100} height={100} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Bocchi the Rock! ( ぼっち・ざ・ろっく )</h5>
                        <p className="card-text">
                        the original soundtrack included in the bonus CDs of the Blu-ray and DVD volumes 1 and 2 of the TV anime “Bocchi the Rock!” will be available for download and streaming. All 53 songs will be available for streaming from June 9th.
                        </p>
                        <a href="https://bocchi.rocks" target="_blank" className="btn btn-primary">Visit</a>
                    </div>
                    </div>
                </div>
                
            <div className="col-md-4">
                    <div className="card">
                    <Image src="/assets/img/card3.jpg" layout="responsive" className="card-img-top" width={100} height={100} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Bocchi the Rock! ( ぼっち・ざ・ろっく )</h5>
                        <p className="card-text">
                            The release of the mini album “Re: Yusakubando” has also been decided. It will include 6 songs including the opening, ending and coupling songs from the theatrical compilation, and will be released on August 14th.
                        </p>
                        <a href="https://bocchi.rocks" target="_blank" className="btn btn-primary">Visit</a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
