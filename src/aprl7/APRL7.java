
package aprl7;
//buttion nelam


import java.awt.Container;
import java.awt.Dimension;
import java.awt.FlowLayout;
import java.awt.Toolkit;
import javax.swing.JButton;
import javax.swing.JFrame;


public class APRL7 {
static JFrame awindio = new JFrame("This is a Flow Layout");

    
    public static void main(String[] args) {
        Toolkit theKit = awindio.getToolkit();
        Dimension wndSize = theKit.getScreenSize();
        awindio.setBounds(wndSize.width/4,wndSize.height/4,wndSize.width/2,wndSize.height/2);
        awindio.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE );
        FlowLayout flow = new FlowLayout (FlowLayout.LEFT);
        flow.setHgap(35);
        flow.setVgap(20);
        Container container = awindio.getContentPane();
        container.setLayout(flow);
        for (int i = 0; i < 10; i++) {
           container.add(new JButton("press"+i));
          
        }
  awindio.setVisible(true);
        
    }
    
}
