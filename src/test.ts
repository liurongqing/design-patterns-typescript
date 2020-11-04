interface IRuleConfigParserFactory {
    createParser(): void
}

class JsonRuleConfigParserFactory implements IRuleConfigParserFactory {
    createParser() {
        return new JsonRuleConfigParser()
    }
}

class XmlRuleConfigParserFactory implements IRuleConfigParserFactory {
    createParser() {
        return new XmlRuleConfigParser()
    }
}

class JsonRuleConfigParser {
    parse(s: string) { }
}

class XmlRuleConfigParser {
    parse(s: string) { }
}

class RuleConfigSource {
    load(ruleConfigFilePath: string) {
        let ruleConfigFileExtension = this.getFileExtension(ruleConfigFilePath)
        let parserFactory = RuleConfigParserFactoryMap.getParserFactory(ruleConfigFileExtension)
        if(!parserFactory) return
        let confitText = ''
        const parser = parserFactory.createParser()
        let ruleConfig = parser.parse(confitText)
        return ruleConfig
    }
    private getFileExtension(filePath: string) {
        return 'json'
    }
}

// 工厂的工厂
class RuleConfigParserFactoryMap {
    static cachedFactories: any
    constructor() {
        RuleConfigParserFactoryMap.cachedFactories = new Map()
        RuleConfigParserFactoryMap.cachedFactories.set('json', new JsonRuleConfigParserFactory())
        RuleConfigParserFactoryMap.cachedFactories.set('xml', new XmlRuleConfigParserFactory())
    }

    static getParserFactory(type: string) {
        if (!type) return null
        const parserFactory = RuleConfigParserFactoryMap.cachedFactories.get(type)
        return parserFactory
    }
}