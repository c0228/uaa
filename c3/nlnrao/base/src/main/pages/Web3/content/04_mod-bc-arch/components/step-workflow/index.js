import React from "react";
import OrderList from "@Components/order-list/index.js";
import HglBgHeader5 from "@Components/hgl-bg-header5/index.js";

const StepWorkflow = () =>{
 const HeaderTitle = ({ index, title, desc}) =>{
  return (<div className="mtop15p" style={{ display:'flex' }}>
    <div style={{ width:'3%' }}><b>{index}.</b></div>
    <div style={{ width:'97%' }}>
        <div><b>{title}</b></div>
        {desc && (<div><i>{desc}</i></div>)}
    </div>
  </div>);
 };
 return (<div>
    <div align="center" className="mtop15p"><h4 className="lh36p"><b>Step-by-Step Workflow</b></h4></div>
    <div className="lh25p">
     <HglBgHeader5 label="Application Layer" />
     <div className="pad15p">

        <HeaderTitle index={1} title="User Interaction" 
            desc="(User submits request via a dApp or API in the Application Layer)"/>
        <OrderList data={[(<div><b>What happens:</b> The user interacts with a decentralized application (dApp) 
        or API. This could be something like sending a transaction, interacting with a smart contract, or 
        querying data.</div>),(<div><b>Example:</b> A user submits a request to send cryptocurrency to another 
        user or trigger a smart contract to perform an action (e.g., swapping tokens).</div>)]} />


        <HeaderTitle index={2} title="Application Logic & Validation" 
            desc="(Application validation is performed on the request)"/>
        <OrderList data={[(<div><b>What happens:</b> Before passing the request to the blockchain, the application 
        layer may perform some client-side validation to ensure the request is formatted correctly and complies with 
        the dApp's rules.</div>),(<div><b>Example:</b> Check that the user has sufficient balance to send tokens or 
        that the smart contract is called with valid parameters.</div>)]} />

     </div>

     <HglBgHeader5 label="Networking Layer" />
     <div className="pad15p">

        <HeaderTitle index={3} title="Transaction Request Sent to Network" 
            desc="(Transaction is propagated through the Networking Layer)"/>
        <OrderList data={[(<div><b>What happens:</b> The transaction or smart contract request is packaged into a 
        message and sent through the networking layer. This involves peer-to-peer communication between nodes in 
        the network.</div>),(<div><b>Example:</b> The request is broadcasted to a set of nodes (validators or miners) 
        that will process the transaction.</div>)]} />

        <HeaderTitle index={4} title="Transaction Propagation" 
            desc="(Validators check the transaction using the Consensus Layer)"/>
        <OrderList data={[(<div><b>What happens:</b> The message is transmitted to various nodes across the network. 
        These nodes then propagate the transaction to other nodes to ensure all participants in the network receive 
        the transaction.</div>),(<div><b>Example:</b> The transaction data reaches multiple nodes (validators) within 
        the network to be processed.</div>)]} />

     </div>

     <HglBgHeader5 label="Consensus Layer" />
     <div className="pad15p">
        
        <HeaderTitle index={5} title="Transaction Validation" />
        <OrderList data={[(<div><b>What happens:</b> The validators or miners use the consensus algorithm to verify the 
        validity of the transaction. They check whether the transaction is properly signed, that the sender has enough 
        funds, and if the transaction complies with protocol rules.</div>),(<div><b>Example:</b> If the transaction is 
        valid (e.g., there are sufficient funds in the sender's wallet), the validators agree to include it in the next 
        block. If it is invalid (e.g., insufficient funds), the transaction is rejected.</div>)]} />

     </div>

     <HglBgHeader5 label="Execution Layer" />
     <div className="pad15p">

        <HeaderTitle index={6} title="Smart Contract Execution" 
            desc="(Smart contracts are executed in the Execution Layer)"/>
       <OrderList data={[(<div><b>What happens:</b> If the transaction involves interacting with a smart contract, the 
       execution layer processes the contract's logic. The contract is executed by the nodes following the 
       protocol rules.</div>),(<div><b>Example:</b> In case of a token transfer, the smart contract will update the 
       balances of the sender and recipient based on the contract's logic.</div>)]} />

     </div>

     <HglBgHeader5 label="Execution Layer & Storage Layer" />
     <div className="pad15p">

        <HeaderTitle index={7} title="State Update" 
            desc="(State is updated and saved in the Storage Layer)"/>
        <OrderList data={[(<div><b>What happens:</b> After the transaction is processed and any necessary smart contract 
        code is executed, the state of the blockchain (e.g., account balances, contract state) is updated. The updated 
        state is stored in the storage layer.</div>),(<div><b>Example:</b> The balances of the sender and recipient are 
        updated. The storage layer saves this updated state to make it available for future transactions or queries.</div>)]} />

     </div>

     <HglBgHeader5 label="Data Availability Layer" />
     <div className="pad15p">
        
        <HeaderTitle index={8} title="Data Availability" 
            desc="(Transaction data becomes available via the Data Availability Layer)"/>
        <OrderList data={[(<div><b>What happens:</b> The data related to the transaction (like the updated balances or 
        contract state) is made available to validators and users. This ensures that all participants can access the most 
        up-to-date blockchain state.</div>),(<div><b>Example:</b> The updated balances and transaction details are stored 
        in a distributed way, so all nodes can access and verify the data, ensuring no data is missing or tampered with.</div>)]} />

     </div>

     <HglBgHeader5 label="Consensus Layer" />
     <div className="pad15p">
     
        <HeaderTitle index={9} title="Block Creation and Finalization" 
            desc="(Transaction is finalized through consensus and added to the blockchain)"/>
        <OrderList data={[(<div><b>What happens:</b> Once the transaction is validated, the consensus layer finalizes the 
        block containing the transaction. The block is added to the blockchain after validators reach consensus.</div>),
        (<div><b>Example:</b> The transaction is included in the next block, and once consensus is achieved (e.g., in 
        Proof of Stake, validators agree), the block is added to the chain, making the transaction permanent.</div>)]} />

     </div>

     <HglBgHeader5 label="Networking Layer" />
     <div className="pad15p">

        <HeaderTitle index={10} title="Block Broadcast to Network" 
            desc="(New block is broadcasted across the network)"/>
        <OrderList data={[(<div><b>What happens:</b> After the block is created and added to the blockchain, it is 
        broadcast to the entire network, ensuring all nodes are aware of the latest state.</div>),(<div><b>Example:</b> 
        The newly created block, which includes the updated transaction data, is sent to all nodes in the network.</div>)]} />
    
     </div>

     <HglBgHeader5 label="Storage Layer" />
     <div className="pad15p">
     
        <HeaderTitle index={11} title="Data Propagation" 
            desc="(Data is stored in the Storage Layer for access by nodes)"/>
        <OrderList data={[(<div><b>What happens:</b> The storage layer ensures that the new block's data is stored 
        across multiple nodes. This includes the updated state and any transaction history.</div>),(<div><b>Example:</b> 
        All nodes update their local copies of the blockchain's state to reflect the new block, which now includes the 
        completed transaction.</div>)]} />

     </div>

     <HglBgHeader5 label="Application Layer" />
     <div className="pad15p">

        <HeaderTitle index={12} title="Confirmation Sent to Application Layer" 
            desc="(Confirmation is sent back to the Application Layer)"/>
        <OrderList data={[(<div><b>What happens:</b> After the transaction is finalized and included in the 
        blockchain, the application layer receives confirmation that the transaction has been processed.</div>),
        (<div><b>Example:</b> The dApp notifies the user that their transaction was successful, and the updated 
        balance is reflected in the user interface.</div>)]} />

        <HeaderTitle index={13} title="User Notification" 
            desc="(User is notified of transaction success or failure)"/>
        <OrderList data={[(<div><b>What happens:</b> The application layer updates the user interface to show the 
        transaction's success or failure. If the transaction was successful, the user's balance is updated, and 
        they are notified.</div>),(<div><b>Example:</b> The user’s wallet balance is updated to reflect the 
        transfer, and a success message is shown on the dApp.</div>)]} />

     
     </div>
     

    </div>
 </div>);
};

export default StepWorkflow;