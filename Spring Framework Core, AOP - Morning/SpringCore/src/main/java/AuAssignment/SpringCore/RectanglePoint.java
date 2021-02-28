package AuAssignment.SpringCore;

public class RectanglePoint {
	private int x;
	private int y;
	
	public RectanglePoint(int x,int y) {
		this.x=x;
		this.y=y;
	}
	public int getX() {
		return x;
	}
	public void setX(int x) {
		this.x = x;
	}
	@Override
	public String toString() {
		return "RectanglePoint [x=" + x + ", y=" + y + "]";
	}
	public int getY() {
		return y;
	}
	public void setY(int y) {
		this.y = y;
	}
}
