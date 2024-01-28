import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

const ChatbotMockup = () => {
    const [messages, setMessages] = useState([
        { id: 1, text: "What travel questions do you have for me today?", sender: 'bot' }
    ]);
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (input.trim()) {
            setMessages([...messages, { id: messages.length + 1, text: input, sender: 'user' }]);
            // Simulate a bot response after a short delay
            setTimeout(() => {
                setMessages(messages => [...messages, { id: messages.length + 2, text: "This is a mock response.", sender: 'bot' }]);
            }, 1000);
            setInput('');
        }
    };

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
            <ScrollView style={styles.messagesContainer}>
                {messages.map(message => (
                    <View key={message.id} style={[styles.message, styles.messageBubble]}>
                        <Text style={styles.messageText}>{message.text}</Text>
                    </View>
                ))}
            </ScrollView>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={input}
                    onChangeText={setInput}
                    placeholder="Type your message..."
                    placeholderTextColor="#666"
                />
                <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
                    <Text style={styles.sendButtonText}>Send</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    messagesContainer: {
        flex: 1,
        paddingTop: 20,
    },
    message: {
        marginVertical: 5,
        borderRadius: 20,
        maxWidth: '80%',
    },
    messageBubble: {
        padding: 10,
        alignSelf: 'flex-end',
        backgroundColor: '#007bff', // Both bubbles blue
    },
    messageText: {
        color: '#fff',
    },
    inputContainer: {
        flexDirection: 'row',
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
    },
    input: {
        flex: 1,
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 10,
        marginRight: 10,
    },
    sendButton: {
        backgroundColor: '#007bff',
        borderRadius: 20,
        padding: 10,
        justifyContent: 'center',
    },
    sendButtonText: {
        color: '#fff',
    },
});

export default ChatbotMockup;
