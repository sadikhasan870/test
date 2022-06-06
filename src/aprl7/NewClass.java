
package aprl7;
//box nai ata
import java.awt.BorderLayout;
import java.awt.Container;
import java.awt.Dimension;
import java.awt.Toolkit;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.border.EtchedBorder;


public class NewClass {
  static JFrame awindio = new JFrame("This is a Flow Layout");

    
    public static void main(String[] args) {
        Toolkit theKit = awindio.getToolkit();
        Dimension wndSize = theKit.getScreenSize();
        awindio.setBounds(wndSize.width/4,wndSize.height/4,wndSize.width/2,wndSize.height/2);
        awindio.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE );
        BorderLayout boder = new BorderLayout();
        Container content = awindio.getContentPane();
        content.setLayout(boder);
        EtchedBorder edge = new EtchedBorder(EtchedBorder.RAISED);
        JButton button;
        
        content.add(button=new JButton("EAST"),BorderLayout.EAST);
        button.setBorder(edge);
        
        content.add(button=new JButton("WEST"),BorderLayout.WEST);
        button.setBorder(edge);
        
        content.add(button=new JButton("NORTH"),BorderLayout.NORTH);
        button.setBorder(edge);
        
         content.add(button=new JButton("SOUTH"),BorderLayout.SOUTH);
        button.setBorder(edge);
        
         content.add(button=new JButton("CENTER"),BorderLayout.CENTER);
        button.setBorder(edge);
        
         awindio.setVisible(true);
}
}
