var searchIndex = {};
searchIndex["h2"] = {"doc":"An asynchronous, HTTP/2.0 server and client implementation.","items":[[3,"Error","h2","Represents HTTP/2.0 operation errors.",null,null],[3,"Reason","","HTTP/2.0 error codes.",null,null],[3,"SendStream","","Sends the body stream and trailers to the remote peer.",null,null],[3,"RecvStream","","Receives the body stream and trailers from the remote peer.",null,null],[3,"ReleaseCapacity","","A handle to release window capacity to a remote stream.",null,null],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"reason","","If the error was caused by the remote peer, the error reason.",0,{"inputs":[{"name":"self"}],"output":{"generics":["reason"],"name":"option"}}],[11,"from","","",0,{"inputs":[{"name":"error"}],"output":{"name":"error"}}],[11,"from","","",0,{"inputs":[{"name":"reason"}],"output":{"name":"error"}}],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",0,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"eq","","",1,{"inputs":[{"name":"self"},{"name":"reason"}],"output":{"name":"bool"}}],[11,"ne","","",1,{"inputs":[{"name":"self"},{"name":"reason"}],"output":{"name":"bool"}}],[11,"clone","","",1,{"inputs":[{"name":"self"}],"output":{"name":"reason"}}],[18,"NO_ERROR","","The associated condition is not a result of an error.",1,null],[18,"PROTOCOL_ERROR","","The endpoint detected an unspecific protocol error.",1,null],[18,"INTERNAL_ERROR","","The endpoint encountered an unexpected internal error.",1,null],[18,"FLOW_CONTROL_ERROR","","The endpoint detected that its peer violated the flow-control protocol.",1,null],[18,"SETTINGS_TIMEOUT","","The endpoint sent a SETTINGS frame but did not receive a response in a timely manner.",1,null],[18,"STREAM_CLOSED","","The endpoint received a frame after a stream was half-closed.",1,null],[18,"FRAME_SIZE_ERROR","","The endpoint received a frame with an invalid size.",1,null],[18,"REFUSED_STREAM","","The endpoint refused the stream prior to performing any application processing.",1,null],[18,"CANCEL","","Used by the endpoint to indicate that the stream is no longer needed.",1,null],[18,"COMPRESSION_ERROR","","The endpoint is unable to maintain the header compression context for the connection.",1,null],[18,"CONNECT_ERROR","","The connection established in response to a CONNECT request was reset or abnormally closed.",1,null],[18,"ENHANCE_YOUR_CALM","","The endpoint detected that its peer is exhibiting a behavior that might be generating excessive load.",1,null],[18,"INADEQUATE_SECURITY","","The underlying transport has properties that do not meet minimum security requirements.",1,null],[18,"HTTP_1_1_REQUIRED","","The endpoint requires that HTTP/1.1 be used instead of HTTP/2.",1,null],[11,"description","","Get a string description of the error code.",1,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"from","","",1,{"inputs":[{"name":"u32"}],"output":{"name":"reason"}}],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[0,"client","","Client implementation of the HTTP/2.0 protocol.",null,null],[3,"Handshake","h2::client","Performs the HTTP/2.0 connection handshake.",null,null],[3,"SendRequest","","Initializes new HTTP/2.0 streams on a connection by sending a request.",null,null],[3,"ReadySendRequest","","Returns a `SendRequest` instance once it is ready to send at least one request.",null,null],[3,"Connection","","Manages all state associated with an HTTP/2.0 client connection.",null,null],[3,"ResponseFuture","","A future of an HTTP response.",null,null],[3,"Builder","","Builds client connections with custom configuration values.",null,null],[5,"handshake","","Creates a new configured HTTP/2.0 client with default configuration values backed by `io`.",null,{"inputs":[{"name":"t"}],"output":{"generics":["bytes"],"name":"handshake"}}],[11,"fmt","","",2,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",3,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",4,{"inputs":[{"name":"self"}],"output":{"name":"builder"}}],[11,"fmt","","",4,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"poll_ready","","Returns `Ready` when the connection can initialize a new HTTP/2.0 stream.",5,{"inputs":[{"name":"self"}],"output":{"generics":["error"],"name":"poll"}}],[11,"ready","","Consumes `self`, returning a future that returns `self` back once it is ready to send a request.",5,{"inputs":[{"name":"self"}],"output":{"name":"readysendrequest"}}],[11,"send_request","","Sends a HTTP/2.0 request to the server.",5,{"inputs":[{"name":"self"},{"name":"request"},{"name":"bool"}],"output":{"generics":["error"],"name":"result"}}],[11,"fmt","","",5,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",5,{"inputs":[{"name":"self"}],"output":{"name":"self"}}],[11,"poll","","",2,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[11,"new","","Returns a new client builder instance initialized with default configuration values.",4,{"inputs":[],"output":{"name":"builder"}}],[11,"initial_window_size","","Indicates the initial window size (in octets) for stream-level flow control for received data.",4,{"inputs":[{"name":"self"},{"name":"u32"}],"output":{"name":"self"}}],[11,"initial_connection_window_size","","Indicates the initial window size (in octets) for connection-level flow control for received data.",4,{"inputs":[{"name":"self"},{"name":"u32"}],"output":{"name":"self"}}],[11,"max_frame_size","","Indicates the size (in octets) of the largest HTTP/2.0 frame payload that the configured client is able to accept.",4,{"inputs":[{"name":"self"},{"name":"u32"}],"output":{"name":"self"}}],[11,"max_header_list_size","","Sets the max size of received header frames.",4,{"inputs":[{"name":"self"},{"name":"u32"}],"output":{"name":"self"}}],[11,"max_concurrent_streams","","Sets the maximum number of concurrent streams.",4,{"inputs":[{"name":"self"},{"name":"u32"}],"output":{"name":"self"}}],[11,"initial_max_send_streams","","Sets the initial maximum of locally initiated (send) streams.",4,{"inputs":[{"name":"self"},{"name":"usize"}],"output":{"name":"self"}}],[11,"max_concurrent_reset_streams","","Sets the maximum number of concurrent locally reset streams.",4,{"inputs":[{"name":"self"},{"name":"usize"}],"output":{"name":"self"}}],[11,"reset_stream_duration","","Sets the maximum number of concurrent locally reset streams.",4,{"inputs":[{"name":"self"},{"name":"duration"}],"output":{"name":"self"}}],[11,"enable_push","","Enables or disables server push promises.",4,{"inputs":[{"name":"self"},{"name":"bool"}],"output":{"name":"self"}}],[11,"handshake","","Creates a new configured HTTP/2.0 client backed by `io`.",4,{"inputs":[{"name":"self"},{"name":"t"}],"output":{"name":"handshake"}}],[11,"default","","",4,{"inputs":[],"output":{"name":"builder"}}],[11,"set_target_window_size","","Sets the target window size for the whole connection.",6,{"inputs":[{"name":"self"},{"name":"u32"}],"output":null}],[11,"poll","","",6,{"inputs":[{"name":"self"}],"output":{"generics":["error"],"name":"poll"}}],[11,"fmt","","",6,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"poll","","",7,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[11,"fmt","","",7,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"poll","","",3,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[0,"server","h2","Server implementation of the HTTP/2.0 protocol.",null,null],[3,"Handshake","h2::server","In progress HTTP/2.0 connection handshake future.",null,null],[3,"Connection","","Accepts inbound HTTP/2.0 streams on a connection.",null,null],[3,"Builder","","Builds server connections with custom configuration values.",null,null],[3,"SendResponse","","Send a response back to the client",null,null],[5,"handshake","","Creates a new configured HTTP/2.0 server with default configuration values backed by `io`.",null,{"inputs":[{"name":"t"}],"output":{"generics":["bytes"],"name":"handshake"}}],[11,"clone","","",8,{"inputs":[{"name":"self"}],"output":{"name":"builder"}}],[11,"fmt","","",8,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",9,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"set_target_window_size","","Sets the target window size for the whole connection.",10,{"inputs":[{"name":"self"},{"name":"u32"}],"output":null}],[11,"poll_close","","Returns `Ready` when the underlying connection has closed.",10,{"inputs":[{"name":"self"}],"output":{"generics":["error"],"name":"poll"}}],[11,"abrupt_shutdown","","Sets the connection to a GOAWAY state.",10,{"inputs":[{"name":"self"},{"name":"reason"}],"output":null}],[11,"graceful_shutdown","","Starts a [graceful shutdown][1] process.",10,{"inputs":[{"name":"self"}],"output":null}],[11,"poll","","",10,{"inputs":[{"name":"self"}],"output":{"generics":["option","error"],"name":"poll"}}],[11,"fmt","","",10,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","Returns a new server builder instance initialized with default configuration values.",8,{"inputs":[],"output":{"name":"builder"}}],[11,"initial_window_size","","Indicates the initial window size (in octets) for stream-level flow control for received data.",8,{"inputs":[{"name":"self"},{"name":"u32"}],"output":{"name":"self"}}],[11,"initial_connection_window_size","","Indicates the initial window size (in octets) for connection-level flow control for received data.",8,{"inputs":[{"name":"self"},{"name":"u32"}],"output":{"name":"self"}}],[11,"max_frame_size","","Indicates the size (in octets) of the largest HTTP/2.0 frame payload that the configured server is able to accept.",8,{"inputs":[{"name":"self"},{"name":"u32"}],"output":{"name":"self"}}],[11,"max_header_list_size","","Sets the max size of received header frames.",8,{"inputs":[{"name":"self"},{"name":"u32"}],"output":{"name":"self"}}],[11,"max_concurrent_streams","","Sets the maximum number of concurrent streams.",8,{"inputs":[{"name":"self"},{"name":"u32"}],"output":{"name":"self"}}],[11,"max_concurrent_reset_streams","","Sets the maximum number of concurrent locally reset streams.",8,{"inputs":[{"name":"self"},{"name":"usize"}],"output":{"name":"self"}}],[11,"reset_stream_duration","","Sets the maximum number of concurrent locally reset streams.",8,{"inputs":[{"name":"self"},{"name":"duration"}],"output":{"name":"self"}}],[11,"handshake","","Creates a new configured HTTP/2.0 server backed by `io`.",8,{"inputs":[{"name":"self"},{"name":"t"}],"output":{"name":"handshake"}}],[11,"default","","",8,{"inputs":[],"output":{"name":"builder"}}],[11,"send_response","","Send a response to a client request.",9,{"inputs":[{"name":"self"},{"name":"response"},{"name":"bool"}],"output":{"generics":["sendstream","error"],"name":"result"}}],[11,"send_reset","","Send a stream reset to the peer.",9,{"inputs":[{"name":"self"},{"name":"reason"}],"output":null}],[11,"poll_reset","","Polls to be notified when the client resets this stream.",9,{"inputs":[{"name":"self"}],"output":{"generics":["reason","error"],"name":"poll"}}],[11,"poll","","",11,{"inputs":[{"name":"self"}],"output":{"name":"poll"}}],[11,"fmt","","",11,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","h2","",12,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",13,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"reserve_capacity","","Requests capacity to send data.",12,{"inputs":[{"name":"self"},{"name":"usize"}],"output":null}],[11,"capacity","","Returns the stream's current send capacity.",12,{"inputs":[{"name":"self"}],"output":{"name":"usize"}}],[11,"poll_capacity","","Requests to be notified when the stream's capacity increases.",12,{"inputs":[{"name":"self"}],"output":{"generics":["option","error"],"name":"poll"}}],[11,"send_data","","Sends a single data frame to the remote peer.",12,{"inputs":[{"name":"self"},{"name":"b"},{"name":"bool"}],"output":{"generics":["error"],"name":"result"}}],[11,"send_trailers","","Sends trailers to the remote peer.",12,{"inputs":[{"name":"self"},{"name":"headermap"}],"output":{"generics":["error"],"name":"result"}}],[11,"send_reset","","Resets the stream.",12,{"inputs":[{"name":"self"},{"name":"reason"}],"output":null}],[11,"poll_reset","","Polls to be notified when the client resets this stream.",12,{"inputs":[{"name":"self"}],"output":{"generics":["reason","error"],"name":"poll"}}],[11,"is_end_stream","","Returns true if the receive half has reached the end of stream.",14,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"release_capacity","","Get a mutable reference to this streams `ReleaseCapacity`.",14,{"inputs":[{"name":"self"}],"output":{"name":"releasecapacity"}}],[11,"poll_trailers","","Returns received trailers.",14,{"inputs":[{"name":"self"}],"output":{"generics":["option","error"],"name":"poll"}}],[11,"poll","","",14,{"inputs":[{"name":"self"}],"output":{"generics":["option"],"name":"poll"}}],[11,"fmt","","",14,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"release_capacity","","Release window capacity back to remote stream.",13,{"inputs":[{"name":"self"},{"name":"usize"}],"output":{"generics":["error"],"name":"result"}}],[11,"clone","","",13,{"inputs":[{"name":"self"}],"output":{"name":"self"}}]],"paths":[[3,"Error"],[3,"Reason"],[3,"ReadySendRequest"],[3,"ResponseFuture"],[3,"Builder"],[3,"SendRequest"],[3,"Connection"],[3,"Handshake"],[3,"Builder"],[3,"SendResponse"],[3,"Connection"],[3,"Handshake"],[3,"SendStream"],[3,"ReleaseCapacity"],[3,"RecvStream"]]};
initSearch(searchIndex);
