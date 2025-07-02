import React from "react";
import { Card, Tab, Highlight } from "e-ui-react";

const IPHT_EXAMPLE_SCENARIO = `Server A -> 10.0.0.1  
Server B -> 10.0.0.2  
Server C -> 10.0.0.3`;

const IPHT_EXAMPLE_JAVA = `import java.math.BigInteger;
import java.security.MessageDigest;

public class IPHashBalancer {
    public static String getServer(String ip, String[] servers) throws Exception {
        MessageDigest md = MessageDigest.getInstance("SHA-256");
        md.update(ip.getBytes());
        byte[] digest = md.digest();
        BigInteger number = new BigInteger(1, digest);
        int index = number.mod(BigInteger.valueOf(servers.length)).intValue();
        return servers[index];
    }

    public static void main(String[] args) throws Exception {
        String[] servers = {"10.0.0.1", "10.0.0.2", "10.0.0.3"};
        String clientIp = "192.168.1.101";
        String server = getServer(clientIp, servers);
        System.out.println("Client " + clientIp + " routed to Server " + server);
    }
}`;

const IPHT_EXAMPLE_JS = `function hashCode(ip) {
    let hash = 0;
    for (let i = 0; i < ip.length; i++) {
        const char = ip.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash |= 0; // Convert to 32bit integer
    }
    return Math.abs(hash);
}

function getServer(ip, servers) {
    const index = hashCode(ip) % servers.length;
    return servers[index];
}

// Example usage
const servers = ['10.0.0.1', '10.0.0.2', '10.0.0.3'];
const clientIp = '192.168.1.101';
console.log(\`Client \${clientIp} routed to Server \${getServer(clientIp, servers)}\`);`;

const IPHT_EXAMPLE_PYTHON = `import hashlib

def get_server(ip_address, servers):
    # Hash the IP address using SHA256
    hash_val = int(hashlib.sha256(ip_address.encode()).hexdigest(), 16)
    server_index = hash_val % len(servers)
    return servers[server_index]

# Example usage
servers = ['10.0.0.1', '10.0.0.2', '10.0.0.3']
client_ip = '192.168.1.101'

assigned_server = get_server(client_ip, servers)
print(f"Client {client_ip} routed to Server {assigned_server}")`;

const Example = () =>{

   const JavaCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={IPHT_EXAMPLE_JAVA} lang="java" />
      </div>);
   };

   const JSCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={IPHT_EXAMPLE_JS} lang="javascript" />
      </div>);
   };

   const PythonCode = ()=>{
      return (<div style={{ border:'1px solid #ccc', padding:'15px' }}>
      <Highlight content={IPHT_EXAMPLE_PYTHON} lang="python" />
      </div>);
   };

 return (<div className="mtop15p lh28p fs16p">
    <div className="mtop15p"><h2 className="blog-head"><b>Example Scenario</b></h2></div>
    <div className="mtop15p">Suppose you have 3 servers:</div>
    <div className="mtop5p">
      <Highlight content={IPHT_EXAMPLE_SCENARIO} lang="python" />
    </div>
    <div className="mtop5p">You receive a request from the client IP: <code><b>192.168.1.101</b></code>. You 
    hash this IP and use modulo 3 to assign it to one of the servers.</div>

    <div className="mtop15p"><h2 className="blog-head"><b>IP Hashing:</b></h2></div>
    <div className="mtop5p">
      <Tab menulinks={[{ id:"java", label:"Java", url:"#", component:(<JavaCode />) },
            { id:"javascript", label:"Javascript", url:"#", component:(<JSCode />) },
            { id:"python", label:"Python", url:"#", component:(<PythonCode />) }]} />
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Advantages:</b></h2></div>
    <div>
      <ul>
         <li className="mtop5p">Session persistence without extra infrastructure</li>
         <li className="mtop5p">Simple to implement and maintain</li>
         <li className="mtop5p">Stateless on the load balancer’s side</li>
      </ul>
    </div>

    <div className="mtop15p"><h2 className="blog-head"><b>Limitations:</b></h2></div>
    <div>
      <ul>
         <li className="mtop5p">Not ideal when backend server count changes dynamically (hash collisions may change mappings)</li>
         <li className="mtop5p">Uneven distribution if client IPs are not diverse</li>
         <li className="mtop5p">Does not account for server load or performance</li>
      </ul>
    </div>

    <div className="mtop5p">
      <Card padding={15} backgroundColor="#eee">
         <b>Tip:</b> Use consistent hashing to improve server change handling.
      </Card>
    </div>

 </div>);
};

export default Example;