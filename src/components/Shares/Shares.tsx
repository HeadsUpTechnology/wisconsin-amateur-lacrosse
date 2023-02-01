import { useRef } from 'react'

interface SharesProps {
	children: React.ReactNode
}

const Shares: React.FC<SharesProps> = ({ children }) => {
	const containerRef = useRef(null);
	
	const handleMouseDown = () => {}
	const handleMouseUp = () => {}
	const handleMouseMove = () => {}
	return (
		<div onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onMouseMove={handleMouseMove}>
			<div ref={containerRef}>
			{children}
			</div>
		</div>
	)
}

export default Shares;