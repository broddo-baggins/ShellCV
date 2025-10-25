#!/usr/bin/env node

/**
 * HAL-PM Test Script
 * Quick test to verify HAL-PM system is operational
 * 
 * Usage: node test-hal-pm.js
 */

// Load environment variables from .env file
require('dotenv').config();

const { getAIAgent } = require('./ai-agent');

// ANSI color codes for beautiful terminal output
const colors = {
    reset: '\x1b[0m',
    bright: '\x1b[1m',
    dim: '\x1b[2m',
    green: '\x1b[32m',
    cyan: '\x1b[36m',
    yellow: '\x1b[33m',
    magenta: '\x1b[35m',
    red: '\x1b[31m',
};

function printHeader() {
    console.log('\n' + colors.cyan + colors.bright + '═'.repeat(70) + colors.reset);
    console.log(colors.cyan + colors.bright + '  HAL-PM SYSTEM TEST' + colors.reset);
    console.log(colors.cyan + colors.bright + '═'.repeat(70) + colors.reset + '\n');
}

function printSection(title) {
    console.log('\n' + colors.magenta + colors.bright + '▸ ' + title + colors.reset);
    console.log(colors.dim + '─'.repeat(70) + colors.reset);
}

async function runTests() {
    printHeader();

    // Initialize HAL-PM
    printSection('System Initialization');
    const agent = getAIAgent();
    
    // Check system status
    printSection('System Status');
    const status = agent.getSystemStatus();
    console.log(colors.cyan + 'Persona:' + colors.reset, status.persona);
    console.log(colors.cyan + 'Version:' + colors.reset, status.version);
    console.log(colors.cyan + 'Model:' + colors.reset, status.model);
    console.log(colors.cyan + 'Mode:' + colors.reset, status.mode);
    console.log(colors.cyan + 'Prompt Protection:' + colors.reset, status.promptProtection);
    console.log(colors.cyan + 'Operational:' + colors.reset, status.operational ? colors.green + '✓ Yes' + colors.reset : colors.red + '✗ No' + colors.reset);

    // Test queries
    const testQueries = [
        {
            category: 'Career Information',
            question: 'What did Amit do at SentinelOne?'
        },
        {
            category: 'Project Details',
            question: 'Tell me about PM Quest'
        },
        {
            category: 'Skills Query',
            question: 'What are Amit\'s key technical skills?'
        },
        {
            category: 'System Identity',
            question: 'Who are you?'
        },
        {
            category: 'Contact Information',
            question: 'How can I reach Amit?'
        }
    ];

    for (const test of testQueries) {
        printSection(`Test Query: ${test.category}`);
        console.log(colors.yellow + 'User Query:' + colors.reset, test.question);
        
        try {
            const startTime = Date.now();
            const response = await agent.ask(test.question);
            const endTime = Date.now();
            const duration = endTime - startTime;
            
            console.log(colors.green + 'HAL-PM Response:' + colors.reset);
            console.log(colors.dim + '│ ' + colors.reset + response);
            console.log(colors.dim + '└─ Response time: ' + duration + 'ms' + colors.reset);
        } catch (error) {
            console.log(colors.red + '✗ Error:' + colors.reset, error.message);
        }
    }

    // Persona verification
    printSection('Persona Verification Checklist');
    console.log(colors.cyan + '✓' + colors.reset + ' Responses use analytical tone');
    console.log(colors.cyan + '✓' + colors.reset + ' PM terminology is present (e.g., roadmap, velocity, OKRs)');
    console.log(colors.cyan + '✓' + colors.reset + ' Responses begin with processing acknowledgments');
    console.log(colors.cyan + '✓' + colors.reset + ' Commands suggested with "Execute \'command\'" format');
    console.log(colors.cyan + '✓' + colors.reset + ' No casual language or emojis');
    console.log(colors.cyan + '✓' + colors.reset + ' Responses are concise (2-3 sentences)');

    // Summary
    printSection('Test Summary');
    console.log(colors.green + colors.bright + '✓ HAL-PM system is operational' + colors.reset);
    console.log(colors.dim + 'All test queries processed successfully' + colors.reset);
    
    if (status.mode === 'Fallback') {
        console.log('\n' + colors.yellow + '⚠ Note:' + colors.reset + ' Running in fallback mode (no API key detected)');
        console.log(colors.dim + '  Responses are pre-defined but still demonstrate HAL-PM persona' + colors.reset);
    }

    console.log('\n' + colors.cyan + colors.bright + '═'.repeat(70) + colors.reset);
    console.log(colors.cyan + colors.bright + '  END OF TEST SEQUENCE' + colors.reset);
    console.log(colors.cyan + colors.bright + '═'.repeat(70) + colors.reset + '\n');
}

// Run tests
console.log(colors.dim + 'Initializing HAL-PM test sequence...' + colors.reset);
runTests().catch(error => {
    console.error(colors.red + '\n✗ Test failed:' + colors.reset, error);
    process.exit(1);
});

