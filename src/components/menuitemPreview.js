export default function MenuItemPreview (props) {
    return(
        <>
        <div className="row">
			<div className="col-lg-2">
			
				<h3>{props.name}</h3>
				<img src={props.image} alt={props.name} />

			</div>
			<div className="col-lg-5">
				<p>
					{props.description}
				</p>

				

			</div>
		</div>
        </>
    )
}