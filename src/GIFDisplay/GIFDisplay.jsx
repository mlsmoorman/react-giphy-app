
export default function GIFDisplay({giphy}) {

    return (
        <div>
            <img src={giphy.images.downsized.url} alt="Giphy" />
        </div>
    )
}